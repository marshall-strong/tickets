const mongoose = require('mongoose');
const folderSchema = require('../schemas/folder');

const Folder = mongoose.model('Folder', folderSchema);

module.exports = Folder;