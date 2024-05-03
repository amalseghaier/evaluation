pipeline {
    agent any
    environment {
        DOCKER_PATH = "C:\\Program Files\\Docker\\cli-plugins"
        PATH = "${DOCKER_PATH}:${PATH}"
        // DOCKERHUB_CREDENTIALS = credentials('DockerHub')
        NODEJS_PATH = "C:\\Program Files (x86)\\nodejs"
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Build  Docker Image') {
            steps {
                // Utiliser un conteneur Docker pour construire et renommer l'image
                script {
                    // Construire l'image Docker (ajustez la commande selon vos besoins)
                    bat 'docker build -t amalseghaier/evaluationss:latest .'

                }
            }
        }

        stage('Build and Run Docker Container') {
            steps {
                // Utiliser un conteneur Docker pour construire et exécuter le conteneur
                script {
                    // Exécuter le conteneur Docker
                    bat "docker run -d -p 8443:80 --name evaluationss_container amalseghaier/evaluationss:latest"
                }
            }
        }
    }
}
