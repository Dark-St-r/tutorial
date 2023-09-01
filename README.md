# Hapi.JS Tutorial Notes

This is intended to be a comprehensive walk through of what I learned while setting up my first APIs with `Hapi.JS`.

## The initialization

To start off I begun with initializing the folder with:

```bash
npm init
```

During this processed it asked me a few questions, to which my response was the default. The only option I really wound up changing was the name of the file that would initialize the server. I changed that from `index.js` to `server.js`.

Following this process I would have went ahead and installed `nodeman` so that I can make live edits to my server as I code, using:

```bash
npm install nodeman -g
```

This is one of the more useful steps in the file preparation process. I made sure to follow it up with installing the `Hapi.JS` package using:

```bash
npm install @hapi/hapi
```

Now with most have what is needed for starting the project being handled, all that was left was to finally begin coding.

## Building the base `server.js` file

I started off by declaring the file to use strict syntax with `'using strict';`, which was then followed up importing the @hapi/hapi package with `const Hapi = require('@hapi/hapi');`

At this point the `server.js` file looks like this:

```js repl
'use strict';

// Load modules
const Hapi = require('@hapi/hapi');
```

The follow up was to declare and create the server with the following:

```js repl

// Declare internals
const init = async => {

    // Create a server with a host and port
    const server = Hapi.server({
        port: 1234,
        host: 'localhost'
    });

};
```

Based on my understanding this just creates a server with the host/address being [localhost](http://127.0.0.1) running on port `1234`. I don't know, seems straightforward to me.

This was followed up by adding a default route for the project to load up by adding the following code bellow `const server = ...`

```js repl

    // Add the route
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            //return 'Hello World!';
            return "<h1>Hello World!</h1>";
        }
    });
```

The only thing that was left to do bellow this was to go ahead and add code to start the server:

```js repl

    // Start the server
    await server.start();
    console.log('Server running on %s', server.info.uri);
```

That said the code for `server.js`, so far, is as follows:

```js repl
'use strict';

// Load modules
const Hapi = require('@hapi/hapi');

// Declare internals
const init = async => {

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
```

I won't lie to you, I don't really understand this next line of code.. but we will soon? Personally I assume that it is saying that once an error that was previously defined occurs, the server should print the error that it is getting and then stop. -- my humble assumption --

```js repl

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
```

Finally, though, we finish off the file by starting the server with `init();`
What does that mean? That the final code with all the changes should look as follows:

```js repl

'use strict';

// Load modules
const Hapi = require('@hapi/hapi');

// Declare internals
const init = async => {

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
```

With that you are done setting up the basic `server.js` file for the project. You can start the server now with:

```bash
nodeman server.js
```

This will load up the server on [localhost](http://localhost:1234).

---

<div align="left">
<p>Author: Dark-St-r<br>
Date: 01/09/2023</p>
</div>
