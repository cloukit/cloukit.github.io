#!/bin/bash

#
# EXPECTING THE FOLLOWING GLOBAL VARS
#  - GITHUB_AUTH_TOKEN = string
#  - GITHUB_AUTH_USER = string
#  - GWBT_TAG = string from https://github.com/codeclou/jenkins-github-webhook-build-trigger-plugin
#             if set release publish will execute. If empty, release publish will not execute.
#  - GWBT_COMMIT_AFTER = string from https://github.com/codeclou/jenkins-github-webhook-build-trigger-plugin

set -e

mkdir build-results
chmod 777 build-results

#
# ONLY MASTER
#
if [[ "${GWBT_BRANCH}" != "documentation" ]]
then
	echo "Only build documentation branch!"
  exit 0
fi

#
# BUILD SCRIPT - RUNS INSIDE DOCKER
#
cat <<EOF > jenkins--inside-docker.sh
#!/bin/bash
set -e
cp -r /work/* /work-private/
cp -r /work/.angular-cli.json /work-private/
cp -r /work/.gitignore /work-private/
rm -f /work-private/package-lock.json
cd /work-private
npm -version
export PATH=$PATH:/work-private/npm-global/bin
npm config set prefix '/work-private/npm-global'
npm config set registry http://nopar.codeclou.io/
npm install -g node-deploy-essentials
echo "ANGULAR CLI"
echo "SASS_BINARY_SITE"
echo $SASS_BINARY_SITE
npm install -g @angular/cli
npm install
sed -i "s/___COMMIT___/$GWBT_COMMIT_AFTER/" ./src/app/app.component.ts
sed -i "s/___BUILDSTAMP___/${BUILD_ID}/" ./src/app/app.component.ts
ng build -prod
cd /work-private/dist
ls -lah
# Create zip without .git but with e.g. .htaccess
if [ -d ".git" ]; then rm -rf .git; fi
# add '.htaccess' manually
zip -r deploy.zip *
mv deploy.zip /work/build-results/
chmod 777 /work/build-results/deploy.zip
ls -lah
echo "Deploying to to https://cloukit.github.io/"
cd /work-private/
ndes deployToGitHubBranch \
    as "codeclou-ci" \
    withEmail "codeclou-ci@codeclou.io" \
    withGitHubAuthUsername $GITHUB_AUTH_USER \
    withGitHubAuthToken $GITHUB_AUTH_TOKEN \
    toRepository https://github.com/cloukit/cloukit.github.io.git \
    branch master \
    fromSource /work-private/dist

EOF

#
# RUN DOCKERIZED BUILD
#
docker run \
    --tty \
    -e GITHUB_AUTH_USER=$GITHUB_AUTH_USER \
    -e GITHUB_AUTH_TOKEN=$GITHUB_AUTH_TOKEN \
    -e SASS_BINARY_SITE="http://node-sass-binary-mirror.codeclou.io/sass/node-sass/releases/download" \
    --volume $WORKSPACE:/work \
    codeclou/docker-nodejs:7.5.0 \
    bash /work/jenkins--inside-docker.sh
