import * as express from 'express'

var app = express()
    .use((req, res, next) =>{
        res.end('Hello express');
    } )
    .listen(3000, () => {
        console.log('Listening on port 3000');
    })