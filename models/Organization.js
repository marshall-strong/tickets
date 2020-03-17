const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const OrganizationSchema = new Schema({
    handle: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

User = mongoose.model('Organization', OrganizationSchema)
module.exports = Organization;
