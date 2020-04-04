const express = require("express");
const router = express.Router();
const Organization = require("../../models/organization")


// Get all organizations
router.get('/', (req, res) => {
  Organization.find()
    .then(organizations => res.json(organizations))
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving organizations."
      });
    });
});


// Get one organization, by id
router.get("/:orgId", (req, res) => {
  const orgId = req.params.orgId;

  Organization.find({ _id: orgId })
    .then(organizations => res.json(organizations))
    .catch(err => {
      res.status(400).json({
        message:
          err.message || `No organization found with id=${orgId}`
      });
    });
});


// Get one organization, by handle
router.get("/handle/:orgHandle", (req, res) => {
  const orgHandle = req.params.orgHandle;

  Organization.find({ handle: orgHandle })
    .then(organizations => res.json(organizations))
    .catch(err => {
      res.status(400).json({
        message:
          err.message || `No organization found with handle=${orgHandle}`
      });
    });
});


// Get all users with the specified orgHandle
router.get('/handle/:orgHandle/users', (req, res) => {
  const orgHandle = req.params.orgHandle;

  User.find({ orgHandle: orgHandle })
    .then(users => res.json(users))
    .catch(err => {
      res.status(400).json({
        message:
          err.message || `No users found with orgHandle=${orgHandle}`
      });
    });
});


// Get users with the specified orgHandle and name
router.get('/handle/:orgHandle/users/name/:name', (req, res) => {
  const orgHandle = req.params.orgHandle;
  const name = req.params.name

  User.find({ 
    $and : [
      { orgHandle: orgHandle },
      { $or : [ { firstName: name }, { lastName: name } ] }
    ]
   })
    .then(users => res.json(users))
    .catch(err => {
      res.status(400).json({
        message:
          err.message || `No users found with orgHandle=${orgHandle}`
      });
    });
});

module.exports = router;