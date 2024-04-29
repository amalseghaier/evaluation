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

        stage('Build and Rename Docker Image') {
            steps {
                // Utiliser un conteneur Docker pour construire et renommer l'image
                script {
                    // Construire l'image Docker (ajustez la commande selon vos besoins)
                    bat 'docker build -t amalseghaier/exam:%BUILD_ID% .'

                    // Renommer l'image Docker
                    bat "docker tag amalseghaier/exam:%BUILD_ID% amalseghaier/exam:latest"
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                // Pousser l'image Docker vers Docker Hub
                script {
                    bat 'docker push amalseghaier/exam:latest'
                }
            }
        }

        stage('Build and Run Docker Container') {
            steps {
                // Utiliser un conteneur Docker pour construire et exécuter le conteneur
                script {
                    // Exécuter le conteneur Docker
                    bat "docker run -d -p 80:86 --name  amalseghaier/exam:latest"
                }
            }
        }
    }
}
