sh 'curl -sSLko pipeline-helper.groovy ${K8S_INFRASTRUCTURE_BASE_URL}pipeline-helper/pipeline-helper.groovy?v2'
def pipelineHelper = load("./pipeline-helper.groovy")
def doBuild = true
stage('branch check') {
    if (env.GWBT_BRANCH != "documentation") {
        doBuild = false
    }
}
pipelineHelper.nodejsTemplate {
  stage('prepare tools') {
    if(doBuild) {
      pipelineHelper.npmWriteClientConfig()
    } else {
       echo 'Skipped'
    }
  }
  stage('git clone') {
    if(doBuild) {
      sh 'git clone --single-branch --branch $GWBT_BRANCH$GWBT_TAG https://${GITHUB_AUTH_TOKEN}@github.com/${GWBT_REPO_FULL_NAME}.git source'
      dir ('source') {
        sh 'git reset --hard $GWBT_COMMIT_AFTER'
      }
    } else {
       echo 'Skipped'
    }
  }
  stage('download dependencies') {
    if(doBuild) {
      dir('source') {
        sh 'yarn'
      }
    } else {
       echo 'Skipped'
    }
  }
  stage('build') {
    if(doBuild) {
      dir('source') {
        sh 'sed -i "s/___COMMIT___/$GWBT_COMMIT_AFTER/g" src/app/services/component-fetch.service.ts'
        sh 'yarn build'
      }
    } else {
       echo 'Skipped'
    }
  }
  stage('deploy') {
    if(doBuild) {
      sh 'git config --global user.name ${GITHUB_COMMIT_USER}'
      sh 'git config --global user.email ${GITHUB_COMMIT_EMAIL}'
      sh 'git config --global push.default simple'
      sh 'git clone --single-branch --branch master https://${GITHUB_AUTH_TOKEN}@github.com/cloukit/${GWBT_REPO_NAME}.git master'
      sh 'rm -rf master/*'
      sh 'cp -r ./source/dist/* ./master/'
      dir('master') {
        sh 'git add . -A'
        sh 'git commit -m "deploy via ci"'
        sh 'git push'
      }
    } else {
       echo 'Skipped - no tag!'
    }
  }
}
