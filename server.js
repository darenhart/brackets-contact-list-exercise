'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const mongoDbUri = 'mongodb://localhost:27017/exercise';
const peopleRoutes = require('./route/people.route');



//connect with mongoDB
mongoose.connect(mongoDbUri);
mongoose.connection.on('connected', () => {
    console.log(`app is connected to ${mongoDbUri}`);
});
mongoose.connection.on('error', err => {
    console.log('error while connecting to mongodb', err);
});





// Create a server with a host and port
const server = Hapi.server({
    host:'localhost',
    port:8000
});

// Add the route
server.route({
    method:'GET',
    path:'/',
    handler:function(request,h) {
        return 'hello world';
    }
});

server.route(peopleRoutes)

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
