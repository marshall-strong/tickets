const seederModule = require('mongoose-seed');
const genHashedPassword = require('../bcrypt_utils');

const MongoUri = require('../../config/keys').mongoURI;

const organizationSeeds = require('./organizations');
const userSeedsHashed = require('./users');
// const ticketSeeds = require('./tickets');
// const tagSeeds = require('./tags');
// const commentSeeds = require('./comments');

// filepaths to each model from the root of the app
const allModelFilepaths = [
    './models/organization.js',
    './models/user.js',
    // './models/ticket.js',
    // './models/tag.js',
    // './models/comment'
];

const allModelNames = [
    'Organization',
    'User',
    // 'Ticket',
    // 'Tag',
    // 'Comment'
];

const allSeedData = [
    organizationSeeds,
    userSeedsHashed,
    // ticketSeeds,
    // tagSeeds,
    // commentSeeds
];

const dbSeeder = (databaseUri, modelPaths, modelNames, seedData) => {
    seederModule.connect(databaseUri, () => {
        seederModule.loadModels(modelPaths);
        seederModule.clearModels(modelNames, () => {
            seederModule.populateModels(seedData, () => {
                seederModule.disconnect();
            });
        });
    });
};

const seedTheDatabase = () => {
    dbSeeder(MongoUri, allModelFilepaths, allModelNames, allSeedData)
};

module.exports = seedTheDatabase;
