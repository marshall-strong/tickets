const express = require('express');
const orgsRouter = express.Router();
const passport = require('passport');
const validateNewOrg = require('../../validation/organization');
const Organization = require('../../models/organization')

orgsRouter.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateOrganizationInput(req.body);

        if (!isValid) return res.status(400).json(errors);

        Organization.findOne({ name: req.body.name })
            .then(organization => {
                if (organization) {
                    errors.name = 'Organization already exists';
                    return res.status(400).json(errors);
                } else {
                    const newOrganization = new Organization({ name: req.body.name });
                    newOrganization.save().then(organization => res.json(organization));
                }
            })
    });

orgsRouter.get('/', (req, res) => {
    Organization.find()
        .then(organizations => res.json(organizations))
});

orgsRouter.get('/:name', (req, res) => {
    Organization.find({ name: req.params.name })
        .then(organization => res.json(organization))
        .catch(err => res.status(400).json({ noOrganizationFound: "No organization found with that name" }))
})

module.exports = orgsRouter;