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

    mongo: {
        credentials: {
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