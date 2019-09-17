// Create express router
const express = require('express');
const router = express.Router();

// route
router.get("/", (req, res) => {
    res.send("hello from node");
});

module.exports = router;  // allow the other file to import