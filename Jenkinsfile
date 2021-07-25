pipeline {
    agent any
    
    stages {
	
	
        stage ('Initialize') {
            steps {
                bat """cd JWToken 
				mvn clean install"""
            }
        }

        stage ('Test') {
            steps {
                bat """cd JWToken
				mvn test"""
            }
        }
	stage ('Build') {
            steps {
                bat """cd JWToken
				mvn package"""
            }
        }

    }
}