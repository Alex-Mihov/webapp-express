const connection = require("../data/movies_db")

// funzione index
function index(req, res) {

    const mysql = `
    SELECT *
    FROM movies 
    `;

    connection.query(mysql, (err, moviesResults) => {
        if (err) return res.status(500).json({ error: "Database query failed" });

        res.json(moviesResults);
    })
}

// funzione show
function show(req, res) {

    // recuperiamo l'id dai params
    const { id } = req.params

    // preapriamo la query per i film 
    const dettaglioFilm = `
    SELECT *
    FROM movies
    WHERE movies.id = ?
    `;

    const movieReview = `
    SELECT *
    FROM reviews
    WHERE movie_id = ?
    `;

    // richiesta dati del singolo film
    connection.query(dettaglioFilm, [id], (err, movieResult) => {

        if (err) return res.status(500).json({ error: "Database query failed" });
        if (movieResult.length === 0) return res.status(404).json({ error: "Movie not found" });

        // res.json(movieResult[0])
        const movie = movieResult[0];

        connection.query(movieReview, [id], (err, reviewResult) => {
            if (err) return res.status(500).json({ error: "Database query failed" });

            movie.reviews = reviewResult;
            res.json(movie);
        });
    });
}

module.exports = { index, show };