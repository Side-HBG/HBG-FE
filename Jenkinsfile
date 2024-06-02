
pipeline{
    environment{
        // 환경변수
        DOCKER_REGISTRY = 'vulcanos/hgb-fe'
        NAMESPACE = 'hgb-fe'
        DEPLOYMENT = 'hgb-front'
        K8S_PATH = './dev-ops/k8s/'
        BRANCH_NAME = "${env.GIT_BRANCH.split('/').size() == 1 ? env.GIT_BRANCH.split('/')[-1] : env.GIT_BRANCH.split('/')[1..-1].join('/')}"
    }
    agent any
    stages {
        stage('SonarQube Analysis') {
            steps {
                def scannerHome = tool 'SonarScanner';
                withSonarQubeEnv() {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage ('docker-build'){
            steps{
                script{
                    dockerImage = docker.build("${DOCKER_REGISTRY}")
                }
            }
        }
        stage ('vulerability-scan'){
            steps{
                script{
                    sh 'sh ./dev-ops/trivy-image-scan.sh ${DOCKER_REGISTRY}'
                }
            }
        }
        stage('docker-push'){
            steps{
                script{
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credential'){
                        dockerImage.push("${BRANCH_NAME}")
                        dockerImage.push("latest")
                    }
                    sh '''
                        docker system prune -f --all
                    '''
                }
            }
        }

        stage('deploy'){
            steps{
                script{
                    sh '''
                        kubectl apply -f ${K8S_PATH}
                    '''
                }
            }
        }
    }
}