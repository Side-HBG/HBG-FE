
pipeline{
    environment{
        // 환경변수
        DOCKER_REGISTRY = 'vulcanos/hgb-fe'
        NAMESPACE = 'hgb-fe'
        DEPLOYMENT = 'hgb-front'
        K8S_PATH = './dev-ops/k8s/'
        BUILD_VERSION = """${sh(
                returnStdout:true,
                script:'git describe --tags --abbrev=0 | tr -d \'\12\''
            )}"""
    }
    agent any
    stages {
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
                        dockerImage.push("${BUILD_VERSION}")
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
                        kubectl rollout -n ${NAMESPACE} restart statefulset ${DEPLOYMENT}
                    '''
                }
            }
        }
    }
}