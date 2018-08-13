# Contact List backend using NodeJS

## Install
`npm install`

## Start
* Port 27017 must be available for mongo
* Port 8000 must be available for NodeJS
`npm start`

## API
- http://localhost:8000/api/people
- http://localhost:8000/api/contact


## docker
`docker pull darenhart/brackets-contact-list-exercise:part1`

## References and Cheat sheet

### mongo
```
sudo systemctl status mongod
sudo systemctl start mongod
```

### Docker
https://docs.docker.com/get-started/
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

```bash
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
```

### docker-compose: nodejs + mongo
https://github.com/KrunalLathiya/DockerNodeMongo
https://medium.com/statuscode/dockerising-a-node-js-and-mongodb-app-d22047e2806f

```bash
# docker compose build
docker-compose build
# run docker compose
docker-compose up
```

