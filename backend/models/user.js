const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const deepPopulate = require("mongoose-deep-populate")(mongoose);
// userSchema.plugin(deepPopulate);

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    orgHandle: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    starred: [{
        type: String
        // type: Schema.Types.ObjectId,
        // ref: 'Ticket'
    }]
});

User = mongoose.model('User', userSchema) //"users");
module.exports = User;
