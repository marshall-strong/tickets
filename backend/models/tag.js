const mongoose = require('mongoose');

const tagSchema = require('../schemas/tag');

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
