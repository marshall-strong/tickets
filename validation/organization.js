const Validator = require('validator');
const validText = require('./valid_text');
const Organization = require('../models/Organization');


module.exports = function validateNewOrg(data) {
    let errors = {};

    data.handle = validText(data.first_name) ? data.first_name : '';

    if (Validator.isEmpty(data.handle)) {
        errors.handle = 'a new organzation must have a valid handle';
    }

    Organization.findOne({ handle: data.handle }).then(org => {
        if (org) {
            errors.organization = "organization already exists";
            return res.status(400).json(errors);
        }
    })

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};