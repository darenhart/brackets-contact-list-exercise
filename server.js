'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const config = require('./config');
const peopleRoutes = require('./route/people.route');
const contactRoutes = require('./route/contact.route');

//connect with mongoDB
mongoose.connect(config.db, { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log(`app is connected to ${config.db}`);
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
server.route(contactRoutes)

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
