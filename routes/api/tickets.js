const express = require("express");
const router = express.Router();

router.get("/1", (req, res) => res.json({ ticket: { title: "write code", id: "1" } }));

router.get("/ticket/:id", (req, res) => {
    Ticket
        .find({ creator: req.params.user_id})
        .then(tickets => res.json(tickets))
        .catch(err => err.status(400).json(err))
})

router.patch("/ticket/:id", (req, res) => {
    Ticket
        .find({ creator: req.params.user_id})
        .then(tickets => res.json(tickets))
        .catch(err => err.status(400).json(err))
})

module.exports = router;