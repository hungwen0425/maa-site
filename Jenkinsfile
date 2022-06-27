pipeline {
    agent {
        node {
            label 'nodejs'
        }

    }
    stages {
        stage('拉取代码') {
            agent none
            steps {
                container('nodejs') {
                    git(url: 'https://github.com/hungwen0425/maa-site.git', credentialsId: 'github-id', branch: 'main', changelog: true, poll: false)
                    sh 'ls -al'
                }

            }
        }

        stage('项目编译') {
            agent none
            steps {
                container('nodejs') {
                    sh 'ls'
                    sh 'npm install --registry=https://registry.npm.taobao.org'
					          sh 'npm run build'
                }

            }
        }

        stage('构建镜像') {
            agent none
            steps {
                container('nodejs') {
                    sh 'ls '
                    sh 'docker build -t maa-site:latest -f Dockerfile  .'
                }

            }
        }

        stage('推送镜像') {
            agent none
            steps {
                container('nodejs') {
                    withCredentials([usernamePassword(credentialsId : 'dockerhub-id' ,passwordVariable : 'DOCKER_PASSWORD' ,usernameVariable : 'DOCKER_USERNAME')]) {
                        sh 'echo "$DOCKER_PASSWORD" | docker login $REGISTRY -u "$DOCKER_USERNAME" --password-stdin'
                        sh 'docker tag maa-site:latest $REGISTRY/$DOCKERHUB_NAMESPACE/maa-site:SNAPSHOT-$BUILD_NUMBER'
                        sh 'docker push  $REGISTRY/$DOCKERHUB_NAMESPACE/maa-site:SNAPSHOT-$BUILD_NUMBER'
                    }

                }

            }
        }

        stage('部署到dev环境') {
            agent none
            steps {
                kubernetesDeploy(configs: 'deploy/**', enableConfigSubstitution: true, kubeconfigId: "$KUBECONFIG_CREDENTIAL_ID")
            }
        }


        stage('流水線完成') {
            agent none
            steps {
                sh 'echo "Pipline finish sucessful !! "'
            }
        }

    }
    environment {
        DOCKER_CREDENTIAL_ID = 'dockerhub-id'
        GITHUB_CREDENTIAL_ID = 'github-id'
        KUBECONFIG_CREDENTIAL_ID = 'demo-kubeconfig'
        REGISTRY = 'docker.io'
        GITHUB_ACCOUNT = 'hungwen0425'
        DOCKERHUB_NAMESPACE = 'hungwen0425'
    }
}
