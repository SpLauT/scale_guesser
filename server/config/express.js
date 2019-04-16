import express from 'express';
import config from './environment';
import expressSession from 'express-session';
import connectMongo from 'connect-mongo';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

export default app => {
    const env = process.env.NODE_ENV;

    const MongoStore = connectMongo(expressSession);
    app.set('assetPath', path.join(config.root, 'client', 'dist'));
    console.log(app.get('assetPath'));

    app.use('/assets', express.static(app.get('assetPath')));
    //TODO: this should only be set when developing, since it's only used for the devserver
    
    if(env === 'development')
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
    );

    app.use(bodyParser.urlencoded({ 
        extended: true
    }))
    .use(bodyParser.json());

    if(env === 'production') {
        app.use(lusca({
            csrf: {
                header: 'x-xsrf-token',
            },
            xframe: 'SAMEORIGIN',
            hsts: {
                maxAge: 31536000, //1 year, in seconds
                includeSubDomains: true,
                preload: true
            },
            xssProtection: true
        }));
    }


}