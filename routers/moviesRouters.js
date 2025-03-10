const express = require("express");

const router = express.Router();

// rotta index
router.get("/", (req, res) => {
    res.send("rotta index")
})

// rotta show
router.get("/:id", (req, res) => {
    res.send("rotta show")
})

module.exports = router;