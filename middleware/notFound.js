// Funzione middleware per gestire le richieste a pagine non trovate
function notFound(req, res, next) {
    // Imposta lo status della risposta a 404 (Not Found)
    res.status(404);
    // Invia una risposta JSON con un messaggio di errore
    res.json({
        error: "Not Found",
        message: "Pagina non trovata"
    });
}

// Esporta la funzione in modo che possa essere utilizzata in altre parti dell'applicazione
module.exports = notFound;