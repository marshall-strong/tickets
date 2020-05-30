const validateFolderInput = require("../../validation/folder");
const express = require("express");
const router = express.Router();
const Folder = require("../../models/folder");

router.post("/", (req, res) => {
    const { errors, isValid } = validateFolderInput(req.body);
    if (!isValid) {
        return res.status(422).json(errors)
    }

    const newFolder = new Folder (
        req.body
        // name: req.name,
        // creator: req.creator,
        // subscribed: [req.creator],
        // queryString: req.queryString
    )

    newFolder.save()
    .then(folder => {
        res.json(folder)
    })
});

router.get('/:userId', (req, res) => {
    Folder.find({ creator: req.params.userId })
    .then(folders => res.json(folders))
});

router.delete('/folders/:folderId', (req, res) => {
    Folder.findById(req.params.folderId)
    .then(folder => {
        folder.remove()
        return res.json('success')
    })
});

module.exports = router;