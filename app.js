const seeder = require('mongoose-seed');
const mongoDbUri = require('./config/keys').development.mongoURI;

const organizationSeeds = require('./backend/mongoose-seed/organizations');
const userSeeds = require('./backend/mongoose-seed/users');

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
        // './models/user.js',
    ]);

    // Clear specified collections
    // seeder.clearModels(['Organization', 'User'], function () {

        // Callback function to populate DB once collections have been cleared
        seeder.populateModels(data, () => console.log("models populated"));

    // });

    seeder.disconnect(() => console.log("seeder disconnected"));
});



const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const passport = require('passport')

const db = require('./config/keys').stage.mongoURI;
const users = require("./routes/api/users")
const tickets = require("./routes/api/tickets")
const tags = require('./routes/api/tags')
const comments = require('./routes/api/comments')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize())
require('./config/passport')(passport);

app.use("/api/users", users)    
app.use("/api/tickets", tickets)
app.use('/api/tags', tags)
app.use('/api/comments', comments)

app.listen(port, () => console.log(`Server is running on port ${port}`));


mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));
