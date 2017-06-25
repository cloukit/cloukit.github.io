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
export SASS_BINARY_SITE="http://node-sass-binary-mirror.codeclou.io/sass/node-sass/releases/download"
echo "SASS_BINARY_SITE"
echo $SASS_BINARY_SITE

echo "INSTALLING node-deploy-essentials"
npm install -g node-deploy-essentials
echo "INSTALLING ANGULAR CLI"
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
