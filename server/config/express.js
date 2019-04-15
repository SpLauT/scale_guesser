import express from 'express';
import config from './environment';
import expressSession from 'express-session';
import connectMongo from 'connect-mongo';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

export default app => {
    const MongoStore = connectMongo(expressSession);
    app.set('assetPath', path.join(config.root, 'client', 'dist'));
    console.log(app.get('assetPath'));

    app.use('/assets', express.static(app.get('assetPath')));
    //TODO: this should only be set when developing, since it's only used for the devserver
    app.use(cors()); 

    app.use(
        expressSession({
            secret: config.secrets.session,
            resave: false,
            saveUninitialized: true,
            store: new MongoStore({
                mongooseConnection: mongoose.connection
            })
        })
    )
    .use(bodyParser.urlencoded({ 
        extended: true
    }))
    .use(bodyParser.json());
}