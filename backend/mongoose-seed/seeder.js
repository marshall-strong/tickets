const seeder = require('mongoose-seed');
const mongoDbUri = require('../../config/keys').development.mongoURI;
const organizationSeeds = require('./organizations');
const userSeeds = require('./users');

// Data array containing seed data - documents organized by Model
const data = [
    organizationSeeds,
    userSeeds,
];

// Connect to MogoDB via Mongoose
seeder.connect(mongoDbUri, function () {

    // Load Mongoose models
    seeder.loadModels([
        './models/organization.js',
        './models/user.js',
    ]);

    // Clear specified collections
    seeder.clearModels(['Organization', 'User'], function () {

        // Callback function to populate DB once collections have been cleared
        seeder.populateModels(data, () => {
            seeder.disconnect();
            console.log("seeder disconnected");
        });

    });

});




