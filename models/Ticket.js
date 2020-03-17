const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    updatedDate: {
        type: Date,
        default: createdDate,
        required: true
    },
    tags: {
        type: Array,
        default: [],
        required: true
    },
    subscribers: {
        type: Array,
        default: [],
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        default: createdDate
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: false
    },
    lastUpdateSeenBy: {
        type: Array,
        default: [],
        required: true
    },
    status: {
        type: Array,
        default: "No Progress",
        required: true
    },
    prority: {
        type: Array,
        default: "Low",
        required: true
    },
    dependsOn: {
        type: Schema.Types.ObjectId,
        required: false
    },
    blocks: {
        type: Schema.Types.ObjectId,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now,
        required: false
    },
    endDate: {
        type: Array,
        default: startDate,
        required: false
    },
})

Ticket = mongoose.model('Ticket', TicketSchema)