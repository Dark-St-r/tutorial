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
    server.route([{
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            //return 'Hello World!';
            return "<h1>Hello World!</h1>";
        }
    },{
        method: 'GET',
        path: '/users/{user?}',
        handler: (request, h) => {
            if (request.params.user) {
                return `<h1>Hello ${request.params.user}</h1>`;
            } else {
                return `<h1>Hello Stranger!</h1>`;
            }
        }
    },{
        method: 'GET',
        path: '/search/{search?}',
        handler: (request, h) => {
            return `<h1>You searched for ${request.query.name} ${request.query.lastname}</h1>`;
        }
    },{
        method: 'GET',
        path: '/home',
        handler: (request, h) => {
            return h.redirect('/');
        }
    },{
        method: 'GET',
        path: '/{any*}',
        handler: (request, h) => {
            return `<h1>404 Error! Page Not Found!</h1>`;
        }
    },
]);

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
