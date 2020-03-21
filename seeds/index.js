// https://github.com/pkosiec/mongo-seeding
// to seed (according to the package README), run the following command from the seed dir
// DEBUG=mongo-seeding node index.js

const mongoURI = require('../config/keys').mongoURI;
const { Seeder } = require('mongo-seeding');

const config = {
    database: mongoURI,
    dropDatabase: true,
};

const seeder = new Seeder(config);

const path = require('path');
const collections = seeder.readCollectionsFromPath(path.resolve('./seeds/seed_data'));

seeder
    .import(collections)
    .then(() => {
        console.log("seeding successful");
    })
    .catch(err => {
        console.log("error during seeding: ", err);
    });