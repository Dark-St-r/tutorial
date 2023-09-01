'use strict';

// Load modules
const Hapi = require('@hapi/hapi');

// Declare internals
const init = async () => {

    // Create a server with a host and port
    const server = Hapi.server({
        port: 1234,
        host: 'localhost'
    });

    // Add the route
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            //return 'Hello World!';
            return "<h1>Hello World!</h1>";
        }
    });

    // Start the server
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

// Start the server
init();