const mongoDbUri = require('../../config/keys').mongoURI;
const mongoose = require('mongoose');
const seeder = require('./index');
// const seeder = require('mongoose-seed');

const organizationSchema = require('../schemas/organization');
const userSchema = require('../schemas/user');
const ticketSchema = require('../schemas/ticket');
const commentSchema = require('../schemas/comment');
const tagSchema = require('../schemas/tag');

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

const Organization = mongoose.model('Organization', organizationSchema);
const User = mongoose.model('User', userSchema);
const Ticket = mongoose.model('Ticket', ticketSchema);
const Comment = mongoose.model('Comment', commentSchema);
const Tag = mongoose.model('Tag', tagSchema);

const run = () => {
  // Load Mongoose models


  seeder.loadModels([]
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
