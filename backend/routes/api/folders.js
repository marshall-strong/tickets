const validateFolderInput = require("../../validation/folder");
const express = require("express");
const router = express.Router();
const Folder = require("../../models/folder");

router.post('/', (req, res) => {
    const { errors, isValid } = validateFolderInput(req.name);


});