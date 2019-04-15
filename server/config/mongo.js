import config from './environment';
console.log('config', config);
import mongoose from 'mongoose'

export default () => {

    const credentials = config.mongo.credentials;

    const options = {
        user: credentials.username,
        pass: credentials.password,
        useNewUrlParser: true
    }

    const mongoUrl = `${config.mongo.uri}:${config.mongo.port}/${config.mongo.database}`; 
    console.log('mongourl', mongoUrl);
    const mongooseConnectionPromise = mongoose.connect(mongoUrl, options);

    const db = mongoose.connection;
    db.on('error', function (err) {
        console.error(`MongoDB connection error: ${err}`);
        process.exit(-1);
    });

    db.once('open', function callback() {
        console.log('connected to mongo db!');
    });

    return mongooseConnectionPromise;
}
