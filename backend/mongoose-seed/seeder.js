const mongoDbUri = require('../../config/keys').mongoURI;
const seeder = require('./index');
// const seeder = require('mongoose-seed');

const models = require('../models/index');

const organizationSeeds = require('./organizations');
const userSeeds = require('./users');
const ticketSeeds = require('./tickets');
const commentSeeds = require('./comments');
const tagSeeds = require('./tags');

// Data array containing seed data - documents organized by Model
const data = [
    organizationSeeds,
    userSeeds,
    ticketSeeds,
    commentSeeds,
    tagSeeds
];

const dbConnectionOptions = {
  'useNewUrlParser': true,
  'useFindAndModify': false,
  'useCreateIndex': true,
  'useUnifiedTopology': true,
};

const run = () => {
  // Load Mongoose models
  seeder.loadModels(
    models
    // [
    //   './backend/models/organization.js',
    //   './backend/models/user.js',
    //   './backend/models/ticket.js',
    //   './backend/models/comment.js',
    //   './backend/models/tag.js'
    // ]
  );

  // Clear specified collections
  seeder.clearModels([
    'Organization',
    'User',
    'Ticket',
    'Comment',
    'Tag',
  ], function () {

    // Callback function to populate DB once collections have been cleared
    seeder.populateModels(data, () => {
      seeder.disconnect();
      console.log("seeder disconnected");
    });

  });
};

// Connect to MogoDB via Mongoose
seeder.connect( mongoDbUri, run);
