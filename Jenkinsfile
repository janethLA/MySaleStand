pipeline {

    agent any


    tools {

    nodejs "NodeAngular"

    }


    parameters {

        string (name:'container_name', defaultValue:'Pagina web', description:'Nombre del contenedor')
        string (name:'image_name', defaultValue:'Pagina img', description:'Nombre de la image contenedor')
        string (name:'container_port', defaultValue: '80', description:'Puerto que se  usa')

    }

    stages

    {

        stage('install')
        {
            steps
            {
                git branch: 'aunthenticate', url: 'https://github.com/janethLA/MySaleStand.git'
               // git branch: 'aunthenticate', url: 'https://github.com/janethLA/MySaleStand.git'
                sh 'npm install'
                dir('/src')
                {
                // some block
                }
            }
        }
    }



}