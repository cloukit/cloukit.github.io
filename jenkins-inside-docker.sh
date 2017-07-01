#!/bin/bash

set -e

cp -r /work/* /work-private/
cp -r /work/.angular-cli.json /work-private/
cp -r /work/.gitignore /work-private/
rm -f /work-private/package-lock.json
cd /work-private
npm -version
export PATH=$PATH:/work-private/npm-global/bin
npm config set registry http://npm-proxy.home.codeclou.io/
export SASS_BINARY_SITE='http://github-proxy.home.codeclou.io/sass/node-sass/releases/download'
npm config set prefix '/work-private/npm-global/'
echo "INSTALLING NDES"
yarn global add node-deploy-essentials
echo "INSTALLING PROJECT DEPENDENCIES"
yarn install
sed -i "s/___COMMIT___/$GWBT_COMMIT_AFTER/" ./src/app/app.component.ts
sed -i "s/___BUILDSTAMP___/${BUILD_ID}/" ./src/app/app.component.ts
yarn build -prod
cd /work-private/dist
cp /work-private/dist/assets/robots.txt /work-private/dist/
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
    as "$GITHUB_COMMIT_USER" \
    withEmail "$GITHUB_COMMIT_EMAIL" \
    withGitHubAuthUsername $GITHUB_AUTH_USER \
    withGitHubAuthToken $GITHUB_AUTH_TOKEN \
    toRepository https://github.com/cloukit/cloukit.github.io.git \
    branch master \
    fromSource /work-private/dist
