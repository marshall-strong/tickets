const seeder = require('mongoose-seed');
const mongoDbUri = require('./config/keys').test.mongoURI;

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
const runMongooseSeed = seeder.connect(mongoDbUri, function () {

    // Load Mongoose models
    seeder.loadModels([
        '../models/organization.js',
    ]);

    // Clear specified collections
    seeder.clearModels(['Organization',], function () {

        // Callback function to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
            seeder.disconnect();
        });

    });
});



const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const passport = require('passport')

const db = require('./config/keys').mongoURI;
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
