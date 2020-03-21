const { Seeder } = require('mongo-seeding');

const config = {
    database: "mongodb+srv://dev:uQ1Ak6eYRdFq0hWq@tickets-tgtki.mongodb.net/test?retryWrites=true&w=majority",
    dropDatabase: true,
};

const seeder = new Seeder(config);

const path = require('path');
const collections = seeder.readCollectionsFromPath(path.resolve('./seed_data'));

seeder
    .import(collections)
    .then(() => {
        console.log("seeding successful");
    })
    .catch(err => {
        console.log("error during seeding: ", err);
    });