import express from 'express'

var server = express()
    .get('/', (reg, res) => {
        res.writeHead(200, {
            'content-type': 'text/plain'
        });

        res.end('Welcome to my page');
    })
    .listen(3000, () => {
        console.log('Listening for request on port 3000');
    })