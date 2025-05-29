pipeline {
  agent any

  tools {
    nodejs 'Node18'
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npx cypress run'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: '**/cypress/screenshots/**', allowEmptyArchive: true
      archiveArtifacts artifacts: '**/cypress/videos/**', allowEmptyArchive: true
    }
  }
}
