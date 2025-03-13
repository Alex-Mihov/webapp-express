// Importa il modulo express
const express = require("express");

// Crea un nuovo router utilizzando express
const router = express.Router();

// Importa il controller dei film
const moviesControllers = require("../controllers/moviesControllers");

// Definisce la rotta per l'indice dei film
// Quando un client fa una richiesta GET a "/", viene chiamato il metodo index del controller dei film
router.get("/", moviesControllers.index);

// Definisce la rotta per mostrare un singolo film
// Quando un client fa una richiesta GET a "/:id", viene chiamato il metodo show del controller dei film
router.get("/:id", moviesControllers.show);

// Esporta il router in modo che possa essere utilizzato in altre parti dell'applicazione
module.exports = router;