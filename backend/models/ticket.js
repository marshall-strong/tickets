const mongoose = require('mongoose');

const ticketSchema = require('../schemas/ticket');

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
