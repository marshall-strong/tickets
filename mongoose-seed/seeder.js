const seeder = require('mongoose-seed');
const mongoDbUri = require('../config/keys').test.mongoURI;

// Data array containing seed data - documents organized by Model
const data = [
    {
        model: 'Organization',
        documents: [
            {
                handle: "cats4humanity.org",
                name: "Cats for Humanity",
                motto: "a cat in every household!"
            },
            {
                handle: "acme.boom",
                name: "ACME",
                motto: "next time..."
            },
            {
                handle: "gmail.com",
                name: "Google",
                motto: "if you have a gmail account, you work at Google!"
            },
            {
                handle: "appacademy.io",
                name: "appAcademy",
                motto: "appAcademy: if you liked your old life, you wouldn't be here."
            },
        ]
    }
];

// Connect to MogoDB via Mongoose
const runMongooseSeed = seeder.connect(mongoDbUri, function() {

    // Load Mongoose models
    seeder.loadModels([
        '../models/organization.js',
    ]);

    // Clear specified collections
    seeder.clearModels(['Organization',], function() {

        // Callback function to populate DB once collections have been cleared
        seeder.populateModels(data, function() {
            seeder.disconnect();
        });

    });
});


module.exports = runMongooseSeed;