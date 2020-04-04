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


module.exports = router;