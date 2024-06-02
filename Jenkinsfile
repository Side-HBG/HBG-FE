
node {
    def DOCKER_REGISTRY = 'vulcanos/hgb-fe'
    def NAMESPACE = 'hgb-fe'
    def DEPLOYMENT = 'hgb-front'
    def K8S_PATH = './dev-ops/k8s/'
    def BRANCH_NAME = "${env.GIT_BRANCH.split('/').size() == 1 ? env.GIT_BRANCH.split('/')[-1] : env.GIT_BRANCH.split('/')[1..-1].join('/')}"
    checkout scm

    stage('SonarQube Analysis') {
        def scannerHome = tool 'SonarScanner';
        withSonarQubeEnv() {
            sh "${scannerHome}/bin/sonar-scanner"
        }
    }
    stage ('docker-build'){
        script{
            dockerImage = docker.build("${DOCKER_REGISTRY}")
        }
    }
    stage ('vulerability-scan'){
        script{
            sh 'sh ./dev-ops/trivy-image-scan.sh ${DOCKER_REGISTRY}'
        }
    }
    stage('docker-push'){
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
    stage ('deploy'){
        script{
            sh '''
                kubectl apply -f ${K8S_PATH}
            '''
        }
    }
}