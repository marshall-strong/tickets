const express = require('express');
const router = express.Router();
const passport = require('passport');

const validateTagInput = require('../../validation/tag');

const Tag = require('../../models/tag')

router.post('/', 
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
    const { errors, isValid } = validateTagInput(req.body);

    if (!isValid) return res.status(400).json(errors);

    Tag.findOne({ name: req.body.name })
    .then( tag => {
        if (tag) {
            errors.name = 'Tag already exists';
            return res.status(400).json(errors);
        } else {
            const newTag = new Tag({ name: req.body.name, orgHandle: req.body.orgHandle });
            newTag.save().then(tag => res.json(tag));
        }
    })    
});

router.get('/:orgHandle', (req, res) => {
    Tag.find({ orgHandle: req.params.orgHandle })
    .then(tag => res.json(tag))
    .catch(err => res.status(400).json({ notagfound: "No tag found with that name" }))
})

module.exports = router;