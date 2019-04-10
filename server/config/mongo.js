import config from './environment';
import mongoose from 'mongoose'

export default () => {

    var credentials = config.mongo.credentials;

    var options = {
        user: credentials.username,
        pass: credentials.password,
        useNewUrlParser: true
    }

    var mongoUrl = config.mongo.uri + ':' + config.mongo.port + '/' + config.mongo.database;
    const mongooseConnectionPromise = mongoose.connect(mongoUrl, options);

    var db = mongoose.connection;
    db.on('error', function (err) {
        console.error(`MongoDB connection error: ${err}`);
        process.exit(-1);
    });

    db.once('open', function callback() {
        console.log('connected to mongo db!');
    });

    return mongooseConnectionPromise;
}
