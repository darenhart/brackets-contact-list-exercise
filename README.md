# Contact List backend using NodeJS
This project is a study/exercise of NodeJS/Mongo/Docker.
The proposal is to provide an API to store and manipulate People and Contacts.
A person can have multiple contacts(email/phone/whatsapp).

## Install
`npm install`

## Start
* `npm start`

## API
- http://localhost:8000/api/people [GET,POST,PUT,DELETE]
- http://localhost:8000/api/contact [GET,POST,PUT,DELETE]


## docker
```bash
docker-compose build
docker-compose up
```

## References and Cheat sheet
Those are some links and commands I needed during the development

### mongo
```bash
sudo systemctl status mongod
sudo systemctl start mongod
```

### Docker
* https://docs.docker.com/get-started/
* https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

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
* https://github.com/KrunalLathiya/DockerNodeMongo
* https://medium.com/statuscode/dockerising-a-node-js-and-mongodb-app-d22047e2806f

```bash
# docker compose build
docker-compose build
# run docker compose
docker-compose up
```

