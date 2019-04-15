module.exports = {

    mongo: {
        useMongoClient: true,
        uri: process.env.MONGODB_URI || 'mongodb://mongo',
        port: 27017
    },

    seedDB: true,
}