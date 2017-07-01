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
# RUN DOCKERIZED BUILD
#
docker run \
    --tty \
    -e GITHUB_AUTH_USER=$GITHUB_AUTH_USER \
    -e GITHUB_AUTH_TOKEN=$GITHUB_AUTH_TOKEN \
    -e GITHUB_COMMIT_USER=$GITHUB_COMMIT_USER \
    -e GITHUB_COMMIT_EMAIL=$GITHUB_COMMIT_EMAIL \
    -e GWBT_COMMIT_BEFORE=$GWBT_COMMIT_BEFORE \
    -e GWBT_COMMIT_AFTER=$GWBT_COMMIT_AFTER \
    -e GWBT_REF=$GWBT_REF \
    -e GWBT_TAG=$GWBT_TAG \
    -e GWBT_BRANCH=$GWBT_BRANCH \
    -e GWBT_REPO_CLONE_URL=$GWBT_REPO_CLONE_URL \
    -e GWBT_REPO_HTML_URL=$GWBT_REPO_HTML_URL \
    -e GWBT_REPO_FULL_NAME=$GWBT_REPO_FULL_NAME \
    -e GWBT_REPO_NAME=$GWBT_REPO_NAME \
    -e BUILD_ID=$BUILD_ID \
    --volume $WORKSPACE:/work \
    codeclou/docker-nodejs:yarn-0.0.27.5-npm-5.0.4-nodejs-7.10.0 \
    bash /work/jenkins-inside-docker.sh
