// Importa il modulo express
const express = require("express");
// Crea un'applicazione express
const app = express();
// Imposta la porta su cui il server ascolterà, presa dalle variabili d'ambiente
const port = process.env.PORT;

// importiamo cors
const cors = require("cors");

// Importa il router dei film
const moviesRouters = require("./routers/moviesRouters");

// Importa il router delle recensioni
const reviewsRouter = require('./routers/reviewsRouters');

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

// middleware per cors
app.use(cors({ origin: process.env.FE_APP }));

// Registra il middleware per il percorso delle immagini
app.use(imagePathMiddleware);

// Definisce la rotta home
app.get("/api", (req, res) => {
    res.json("Benvenuto nella rotta principale!");
});

// Definisce la rotta per i film e imposta il prefisso "/api/movies"
app.use("/api/movies", moviesRouters);

// Definisce la rotta per le recensioni e imposta il prefisso "/api"
app.use('/api', reviewsRouter);

// Middleware per gestire le richieste a pagine non trovate (404)
app.use(notFound);

// Middleware per gestire gli errori del server
app.use(errorsHandler);

// Avvia il server e lo mette in ascolto sulla porta specificata
app.listen(port, () => {
    console.log(`Server avviato e in ascolto sulla porta ${port}`);
});