// Importa il modulo express
const express = require("express");

// Crea un nuovo router utilizzando express
const router = express.Router();

// Importa il modulo reviewsControllers
const reviewsControllers = require("../controllers/reviewsControllers");

// Definisce una rotta POST per memorizzare una recensione
router.post('/:id/reviews', reviewsControllers.storeReview);

// Esporta il router per poterlo utilizzare in altri file
module.exports = router

