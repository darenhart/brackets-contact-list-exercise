# brackets-contact-list-exercise
Angular and NodeJS exercise

## Install
npm install

## Start
npm start

## mongo
sudo systemctl status mongod
sudo systemctl start mongod


## Docker
https://docs.docker.com/get-started/
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/


## Docker - mongo
https://github.com/KrunalLathiya/DockerNodeMongo
https://medium.com/statuscode/dockerising-a-node-js-and-mongodb-app-d22047e2806f


`
# list images
docker image ls
# list containers
docker container ls --all
# build image
docker build -t darenhart/brackets-contact-list-exercise .
# run image
docker run -p 8000:8080 -d darenhart/brackets-contact-list-exercise
# show running container
docker ps
# print app output
docker logs <container id>
# stop container
docker container stop <container id>
`

## docker-compose
`
# docker compose build
docker-compose build
# run docker compose
docker-compose up
`

