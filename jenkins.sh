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
    --volume $WORKSPACE:/work \
    codeclou/docker-nodejs:7.5.0 \
    bash /work/jenkins-inside-docker.sh
