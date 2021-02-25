const mongoose = require("mongoose");

const seeder = require("./index");
const dbSeedData = require("./seed_data");

const KEYS = require("../../config/keys");

const organizationSchema = require("../schemas/organization");
const userSchema = require("../schemas/user");
const ticketSchema = require("../schemas/ticket");
const commentSchema = require("../schemas/comment");
const tagSchema = require("../schemas/tag");

const Organization = mongoose.model("Organization", organizationSchema);
const User = mongoose.model("User", userSchema);
const Ticket = mongoose.model("Ticket", ticketSchema);
const Comment = mongoose.model("Comment", commentSchema);
const Tag = mongoose.model("Tag", tagSchema);

// collections to clear before seeding
const dbCollections = ["Organization", "User", "Ticket", "Comment", "Tag"];

// Callback function to populate DB once collections have been cleared
const dbPopulate = () => {
  seeder.populateModels(dbSeedData, () => {
    seeder.disconnect();
    console.log("seeder disconnected...");
  });
};

const dbSeed = () => {
  // seeder.loadModels is no longer needed -- models are loaded above.
  seeder.loadModels([]);
  console.log("Schemas registered for all mongoose models");

  // Clear existing collections, then populate db using seed data
  seeder.clearModels(dbCollections, dbPopulate);
};

// Connect to MogoDB via Mongoose
const dbConnectionURI = KEYS.mongoURI;
const dbConnectionOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

seeder.connect(dbConnectionURI, dbConnectionOptions, dbSeed);
