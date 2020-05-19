const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const folderSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    subscribed: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    createdAt: [{
        type: Date,
        default: Date.now()
    }],
    postition: [{
        type: Number
    }]
});

module.exports = folderSchema;