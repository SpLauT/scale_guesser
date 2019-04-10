import express from 'express';
import config from './environment';
import expressSession from 'express-session';
import connectMongo from 'connect-mongo';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

export default app => {
    const MongoStore = connectMongo(expressSession);
    app.set('appPath', path.join(config.root, 'client'));

    app.use( express.static(path.join(app.get('appPath'), 'dist')));

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
    .use(bodyParser());
}