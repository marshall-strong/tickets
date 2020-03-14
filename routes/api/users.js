const express = require("express");
const router = express.Router();

router.get("/1", (req, res) => res.json({ user: { username: "user1", id: "1"} }));

module.exports = router;