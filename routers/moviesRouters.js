// Importa il modulo express
const express = require("express");

// Crea un nuovo router utilizzando express
const router = express.Router();

// Importa il middleware per la gestione degli upload di file
const upload = require("../middleware/multer");

// Importa il controller dei film
const moviesControllers = require("../controllers/moviesControllers");

// Definisce la rotta per l'indice dei film
// Quando un client fa una richiesta GET a "/", viene chiamato il metodo index del controller dei film
router.get("/", moviesControllers.index);

// Definisce la rotta per mostrare un singolo film
// Quando un client fa una richiesta GET a "/:id", viene chiamato il metodo show del controller dei film
router.get("/:id", moviesControllers.show);

// Definisce la rotta per creare un nuovo film
// Quando un client fa una richiesta POST a "/", viene chiamato il metodo store del controller dei film
// Il middleware upload.single("image") gestisce l'upload dell'immagine
router.post("/", upload.single("image"), moviesControllers.store);

// Esporta il router in modo che possa essere utilizzato in altre parti dell'applicazione
module.exports = router;