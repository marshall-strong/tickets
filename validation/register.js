const Validator = require('validator');
const validText = require('./valid_text');
const User = require('../models/User');
const Organization = require('../models/organization');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.firstName = validText(data.firstName) ? data.firstName : '';
    data.lastName = validText(data.lastName) ? data.lastName : '';
    data.email = validText(data.email) ? data.email : '';
    let organizationHandle = data.email.slice(data.email.search("@"));
    organizationHandle = validText(organizationHandle) ? organizationHandle : '';
    data.password = validText(data.password) ? data.password : '';
    data.password2 = validText(data.password2) ? data.password2 : '';
    
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = 'a first name is required';
    }

    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = 'a last name is required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'an email is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'unrecognized email address';
    }

    User.findOne({ email: data.email }).then(user => {
        if (!user) {
            errors.user = "a User with this email already exists";
            return res.status(400).json(errors);
        }
    })

    Organization.findOne({ handle: organizationHandle }).then(organization => {
        if (!organization) {
            errors.organization = "your Organization is not registered";
            return res.status(400).json(errors);
        }
    })

    if (Validator.isEmpty(data.password)) {
        errors.password = 'a password is required';
    }

    if (!Validator.isLength(data.password, { min: 6 })) {
        errors.password = 'password must have least 6 characters';
    }

    if (!Validator.isLength(data.password, { max: 30 })) {
        errors.password = 'password must have fewer than 30 characters';
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'please reenter your password';
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'passwords must match';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};