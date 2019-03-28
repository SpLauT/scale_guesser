import express from 'express'
import mongoose, { mongo } from 'mongoose' 

const mongooseConnectionPromise = mongoose.connect('mongodb://127.0.0.1:27017');

var db = mongoose.connection;
db.on('error', function(err){
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
});

db.once('open', function callback(){
    console.log('connected!');
});



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