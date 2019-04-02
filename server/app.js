import express from 'express'
import mongoose from 'mongoose'
import config from './config/environment'
import expressSession from 'express-session'
import connectMongo from 'connect-mongo'

var credentials = config.mongo.credentials; 

var options = {
    user: credentials.username,
    pass: credentials.password,
    useNewUrlParser: true
}

var mongoUrl = config.mongo.uri + ':' + config.mongo.port + '/' + config.mongo.database ;
const mongooseConnectionPromise = mongoose.connect(mongoUrl, options);

var db = mongoose.connection;
db.on('error', function(err){
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
});

db.once('open', function callback(){
    console.log('connected to mongo db!');
});

const MongoStore = connectMongo(expressSession);

var server = express()
    .use(expressSession({
        secret: config.secrets.session,
        resave: true,
        saveUninitialized: true,
        store: new MongoStore({
            mongooseConnection: db
        })
    }))
    .get('/', (req, res) => {
        res.writeHead(200, {
            'content-type': 'text/plain'
        });

        if(req.session.views){
            req.session.views++;
        }
        else{
            req.session.views = 1;
        }

        res.end('Welcome to my page, you have visited: ' + req.session.views );
    })
    .listen(config.port, () => {
        console.log(`Listening for request on port ${config.port}`);
    })