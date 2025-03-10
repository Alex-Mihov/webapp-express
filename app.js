// Importa il modulo express
const express = require("express");
// Crea un'applicazione express
const app = express();
// Imposta la porta su cui il server ascolterà, presa dalle variabili d'ambiente
const port = process.env.PORT;

// Importa il router dei film
const moviesRouters = require("./routers/moviesRouters");

// Importa il middleware per il percorso delle immagini
const imagePathMiddleware = require("./middleware/imagePath");

// Importa il middleware di gestione 404
const notFound = require("./middleware/notFound");

// Importa il middleware di gestione degli errori del server
const errorsHandler = require("./middleware/errorsHandler");

// Imposta la cartella dei file statici
app.use(express.static("public"));

// Middleware per il parsing del corpo delle richieste in formato JSON
app.use(express.json());

// Registra il middleware per il percorso delle immagini
app.use(imagePathMiddleware);

// Definisce la rotta home
app.get("/api", (req, res) => {
    res.json("Benvenuto nella rotta principale!");
});

// Definisce la rotta per i film e imposta il prefisso "/api/movies"
app.use("/api/movies", moviesRouters);

// Middleware per gestire le richieste a pagine non trovate (404)
app.use(notFound);

// Middleware per gestire gli errori del server
app.use(errorsHandler);

// Avvia il server e lo mette in ascolto sulla porta specificata
app.listen(port, () => {
    console.log(`Server avviato e in ascolto sulla porta ${port}`);
});