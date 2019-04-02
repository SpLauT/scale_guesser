module.exports = {

    mongo: {
        useMongoClient: true,
        uri: process.env.MONGODB_URI || 'mongodb://localhost',
        port: 27017
    },

    seedDB: true,
}