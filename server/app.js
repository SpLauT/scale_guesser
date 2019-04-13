import express from 'express';
import config from './config/environment';
import configureMongo from './config/mongo';
import configureExpress from './config/express';
import registerRoutes from './routes';

var app = express();
configureExpress(app);
registerRoutes(app);
const mongoosePromise = configureMongo();



const startServer = () =>
    app.backend = app.listen(config.port, () => {
        console.log(`Listening for request on port ${config.port}`);
    });

mongoosePromise
.then(startServer);

export default app;