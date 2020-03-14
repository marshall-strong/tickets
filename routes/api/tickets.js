const express = require("express");
const router = express.Router();

router.get("/1", (req, res) => res.json({ ticket: { title: "write code", id: "1" } }));

module.exports = router;