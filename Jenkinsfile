pipeline {
agent {
	docker {
			image 'node:22'
		}
	}
	stages {
		stage("Build") {
			agent {
				docker {
					image 'node:22-alpine'
					reuseNode true
				}
			}
			steps {
				sh 'npm i -g pnpm'
				sh 'pnpm i'
				sh 'pnpm build'
			}
		}
		stage('Deploy') {
			steps {
				sh 'rm -rf /var/www/dev.araozu/*'
				sh 'mv -f dist/* /var/www/dev.araozu/'
				sh 'docker-compose down || true'
				sh 'docker-compose up -d'
			}
		}
	}
}
