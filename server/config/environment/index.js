import path from 'path'
import shared from './shared'
import _ from 'lodash'

var all = {
    env: process.env.NODE_ENV,

    root: path.normalize(`${__dirname}/../../..`),

    port: process.env.PORT || 9000,

    ip: process.env.IP || '0.0.0.0',

    secrets: {
        session: 'my-best-secret'
    },

    reduxStoreKey: 'Redux',

    mongo: {
        credentials: {
            //there is really a chicken and the egg problem here
            //I need access to the database, before I can make this user.
            //But in order to get access to an authorized database I need this to be set.
            username: 'scaleapp',
            password: 'scaling'
        },
        database: 'scale_app'
    }
}

module.exports = _.merge(
    all,
    shared.default,
    require(`./${process.env.NODE_ENV}.js`)
);