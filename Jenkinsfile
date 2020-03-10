pipeline{
	
		agent {
		label 'Slave_Induccion'
		}
	
        
		triggers {
        pollSCM('@hourly')
		}
	
		tools {
            
		}
	
		options {
			buildDiscarder(logRotator(numToKeepStr: '5'))
			disableConcurrentBuilds()
		}
		
		environment {
		}
		parameters{

		}
		
		stages{
		
			stage('Checkout') {
				steps {
                echo '------------>Checkout desde Git Microservicio<------------'
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: 'microservicio']], gitTool: 'Default' , submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'GitHub_boterojuanpa', url: 'https://github.com/boterojuanpa/node-jest-arquitectura-hexagonal']]])
				}
			}
		
		
			stage('compilar '){
                steps {
                    sh 'npm i'
					
				}
            }
			// }
			// stage('Test Unitarios -Cobertura'){
			// 	parallel {
			// 		stage('Test- Cobertura backend'){
			// 			steps {
			// 				echo '------------>test backend<------------'
			// 				dir("${PROJECT_PATH_BACK}"){
			// 					sh 'gradle --stacktrace test'
								
			// 				}
			// 			}
			// 		}
			// 	}
			// }
			
			// stage('Sonar Analysis'){
			// 	steps{
			// 		echo '------------>Analisis de código estático<------------'
			// 		  withSonarQubeEnv('Sonar') {
            //             sh "${tool name: 'SonarScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner -Dsonar.projectKey={{#nombreProyectoSonar}}{{campo}}{{/nombreProyectoSonar}}.${BRANCH_NAME} -Dsonar.projectName={{#nombreProyectoSonar}}{{campo}}{{/nombreProyectoSonar}}.${BRANCH_NAME} -Dproject.settings=./sonar-project.properties"
            //          }
			// 	}
			// }
		
		

		}
		post {
			failure {
				mail(to: '{{#correosEnvioFallo}}{{campo}}{{/correosEnvioFallo}}',
				body:"Build failed in Jenkins: Project: ${env.JOB_NAME} Build /n Number: ${env.BUILD_NUMBER} URL de build: ${env.BUILD_NUMBER}/n/nPlease go to ${env.BUILD_URL} and verify the build",
				subject: "ERROR CI: ${env.JOB_NAME}")
			}
		}	
			
}