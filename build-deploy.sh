docker-compose build
aws lightsail push-container-image --region us-east-2 --service-name bobprototype --label bobbackend --image capstone-app-web:latest