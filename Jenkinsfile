pipeline {
    agent any
    
    stages {
	
	
        stage ('Initialize') {
            steps {
                bat """cd week5-day5-jwt 
				mvn clean install"""
            }
        }

        stage ('Test') {
            steps {
                bat """cd week5-day5-jwt
				mvn test"""
            }
        }
	stage ('Build') {
            steps {
                bat """cd week5-day5-jwt
				mvn package"""
            }
        }

    }
}