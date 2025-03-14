// Importa la connessione al database
const connection = require("../data/movies_db");

// Funzione per gestire la rotta index
function index(req, res) {
    // Query SQL per selezionare tutti i film
    const mysql = `
    SELECT *
    FROM movies
    `;

    // Esegue la query sul database
    connection.query(mysql, (err, moviesResults) => {
        // Gestisce eventuali errori nella query
        if (err) return res.status(500).json({ error: "Database query failed" });

        // Mappa i risultati della query per aggiungere il percorso dell'immagine
        const movies = moviesResults.map(movie => {
            return { ...movie, image: req.imagePath + movie.image }
        });

        // Invia i risultati come risposta JSON
        res.json(movies);
    });
}

// Funzione per gestire la rotta show
function show(req, res) {
    // Recupera l'id dai parametri della richiesta
    const { id } = req.params;

    // Prepara la query per ottenere i dettagli del film
    const dettaglioFilm = `
    SELECT *
    FROM movies
    WHERE movies.id = ?
    `;

    // Prepara la query per ottenere le recensioni del film
    const movieReview = `
    SELECT *
    FROM reviews
    WHERE movie_id = ?
    `;

    // Esegue la query per ottenere i dettagli del film
    connection.query(dettaglioFilm, [id], (err, movieResult) => {
        // Gestisce eventuali errori nella query
        if (err) return res.status(500).json({ error: "Database query failed" });
        // Gestisce il caso in cui il film non sia trovato
        if (movieResult.length === 0) return res.status(404).json({ error: "Movie not found" });

        // Ottiene il film dai risultati della query
        const movie = movieResult[0];

        // Esegue la query per ottenere le recensioni del film
        connection.query(movieReview, [id], (err, reviewResult) => {
            // Gestisce eventuali errori nella query
            if (err) return res.status(500).json({ error: "Database query failed" });

            // Aggiunge le recensioni al film
            movie.reviews = reviewResult;

            // aggiunginmo il percorso dell'immagine
            movie.image = req.imagePath + movie.image;

            // Invia il film con le recensioni come risposta JSON
            res.json(movie);
        });
    });
}

// Funzione per gestire l'inserimento di un nuovo film
function store(req, res, next) {
    // Estrae i dati del film dal corpo della richiesta
    const { title, director, abstract } = req.body;

    // Ottiene il nome del file dell'immagine caricata
    const imageName = `${req.file.filename}`;

    // Query SQL per inserire un nuovo film
    const newMovieSql = `
    INSERT INTO movies (title,director,abstract,image)
    VALUES (?,?,?,?)
    `;

    // Esegue la query per inserire il nuovo film nel database
    connection.query(newMovieSql, [title, director, abstract, imageName],
        (err, result) => {
            // Gestisce eventuali errori nella query
            if (err) {
                console.log(err)
                return next(new Error("Errore interno al server"))
            }

            // Invia una risposta di successo
            res.status(201).json({
                status: "success",
                message: "Film creato con successo"
            })
        })
}

// Esporta le funzioni index, show e store per essere utilizzate in altre parti dell'applicazione
module.exports = { index, show, store };