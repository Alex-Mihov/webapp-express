// Importa la connessione al database
const connection = require("../data/movies_db");

// funzione store 
function storeReview(req, res) {
    // Estrai l'id dai parametri della richiesta
    const { id } = req.params;

    // Estrai name, text e vote dal corpo della richiesta
    const { name, text, vote } = req.body;

    // Query SQL per inserire una nuova recensione
    const insertReviewSql = 'INSERT INTO reviews (text, name, vote, movie_id) VALUES (?, ?, ?, ?)'

    // Eseguiamo la query 
    connection.query(insertReviewSql, [text, name, vote, id], (err, reviewsResults) => {
        // Gestione degli errori della query
        if (err) return res.status(500).json({ error: 'Database query failed' });
        // Imposta lo stato della risposta a 201 (Creato)
        res.status(201);
        // Risponde con un messaggio di successo e l'id della recensione inserita
        res.json({ message: "Review added", id: reviewsResults.insertId });
    });
}

// Esporta la funzione storeReview
module.exports = { storeReview };