pipeline {
agent {
		docker {
			image 'node:22'
		}
	}
    stages {
		stage('Install pnpm') {
			steps {
				sh 'npm i -g pnpm'
			}
		}
		stage('Install dependencies') {
			steps {
				sh 'pnpm i'
			}
		}
		stage('Buid') {
			steps {
				sh 'pnpm build'
			}
		}
		stage('Deploy') {
			steps {
				sh 'rm -rf /var/www/dev.araozu/*'
				sh 'mv -f dist/* /var/www/dev.araozu/'
			}
		}
	}
}
