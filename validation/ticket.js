const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateTicketInput(ticket) {
    let errors = {};

    ticket.title = validText(ticket.title) ? ticket.title : ''
    ticket.body = validText(ticket.body) ? ticket.body : ''

    if (Validator.isEmpty(ticket.title)) {
        errors.title = "Title can't be blank"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}