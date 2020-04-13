const mongoose = require('mongoose');

const organizationSchema = require('../schemas/organization');

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;
