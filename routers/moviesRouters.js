const express = require("express");

const router = express.Router();


const moviesControllers = require("../contollers/moviesContollers")


// rotta index
router.get("/", moviesControllers.index)

// rotta show
router.get("/:id", moviesControllers.show)

module.exports = router;