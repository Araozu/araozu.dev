pipeline {
    agent any
    environment {
        PATH = "/var/lib/jenkins/.nvm/versions/node/v20.9.0/bin:/var/lib/jenkins/bin:${env.PATH}"
    }
    stages {
        stage('Install deps') {
            steps {
                sh 'pnpm i'
            }
        }
        stage('Build') {
            environment {
                PATH = "${env.WORKSPACE}/node_modules/.bin:${env.PATH}"
            }
            steps {
                sh 'pnpm build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'cp -r ./dist/* /var/www/araozu.dev/'
            }
        }
    }
}
