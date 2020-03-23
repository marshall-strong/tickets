const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const express = require("express");
const usersRouter = express.Router();
const keys = require('../../../config/keys')
const validateRegisterInput = require("../../validation/register")
const validateLoginInput = require("../../validation/login")
const User = require('../../models/user')

usersRouter.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            errors.email = "User already exists";
            return res.status(400).json(errors);
        } else {
            const orgName = req.body.email.slice(req.body.email.search("@"));
            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                organization: orgName,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then(user => {
                        const payload = { 
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            organization: user.organization
                        };

                        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                            res.status(201).json({
                                success: true,
                                token: "Bearer " + token
                            });
                        });
                    })
                    .catch(err => console.log(err));
                });
            });
        }
    });
});

usersRouter.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
    .populate('starred')
    .then(user => {
        if (!user) {
            errors.email = "There is no account associated with that email";
            return res.status(400).json(errors);
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = { 
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    organization: user.organization,
                };

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
            } else {
                errors.password = "Incorrect password";
                return res.status(400).json(errors);
            }
        });
    });
});

usersRouter.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        organization: req.user.organization,
    });
})

usersRouter.get("/:orgHandle", (req, res) => {
    //debugger
    User.find(
        { organization: req.params.orgHandle }, 
        'firstName lastName email organization',
        (err, docs) => {
            //debugger
            if (err) throw err;
            return res.json(docs);
        }
    )
})

module.exports = usersRouter;
