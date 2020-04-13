const mongoose = require('mongoose');

const seeder = require('./index');
// const seeder = require('mongoose-seed');

const KEYS = require('../../config/keys');

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

const Organization = mongoose.model('Organization', organizationSchema);
const User = mongoose.model('User', userSchema);
const Ticket = mongoose.model('Ticket', ticketSchema);
const Comment = mongoose.model('Comment', commentSchema);
const Tag = mongoose.model('Tag', tagSchema);


// collections to clear before seeding
const dbCollections = [
  'Organization',
  'User',
  'Ticket',
  'Comment',
  'Tag',
];

// Data array containing seed data - documents organized by Model
const dbSeedData = [
  organizationSeeds,
  userSeeds,
  ticketSeeds,
  commentSeeds,
  tagSeeds
];


// Callback function to populate DB once collections have been cleared
const dbPopulate = () => {
  seeder.populateModels(dbSeedData, () => {
    seeder.disconnect();
    console.log("seeder disconnected...");
  });
};


const dbSeed = () => {
  // seeder.loadModels is no longer needed -- models are loaded above.
  seeder.loadModels( [] );
  console.log("Schemas registered for all mongoose models")

  // Clear existing collections, then populate db using seed data
  seeder.clearModels(dbCollections, dbPopulate);
};


// Connect to MogoDB via Mongoose
const dbConnectionURI = KEYS.mongoURI;
const dbConnectionOptions = {
  'useNewUrlParser': true,
  'useFindAndModify': false,
  'useCreateIndex': true,
  'useUnifiedTopology': true,
};

seeder.connect(dbConnectionURI, dbConnectionOptions, dbSeed);
