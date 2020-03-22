const mongoDbUri = require('../../config/keys').mongoURI;
const seeder = require('mongoose-seed');

const organizationSeeds = require('./organizations');
const userSeeds = require('./users');
const ticketSeeds = require('./tickets');
const commentSeeds = require('./comments');
const tagSeeds = require('./tags');

// Data array containing seed data - documents organized by Model
const data = [
    organizationSeeds,
    userSeeds,
    // ticketSeeds,
    // commentSeeds,
    // tagSeeds
];

// Connect to MogoDB via Mongoose
seeder.connect(mongoDbUri, function () {

    // Load Mongoose models
    seeder.loadModels([
        './models/organization.js',
        './models/user.js',
        // './models/ticket.js',
        // './models/comment.js',
        // './models/tag.js'
    ]);

    // Clear specified collections
    seeder.clearModels([
        'Organization', 
        'User',
        // 'Ticket',
        // 'Comment',
        // 'Tag',
    ], function () {

        // Callback function to populate DB once collections have been cleared
        seeder.populateModels(data, () => {
            seeder.disconnect();
            console.log("seeder disconnected");
        });

    });

});




