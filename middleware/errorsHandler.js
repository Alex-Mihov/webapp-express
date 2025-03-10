// Funzione middleware per gestire gli errori del server
function errorsHandler(err, req, res, next) {
    // Imposta lo status della risposta a 500 (Internal Server Error)
    res.status(500);
    // Invia una risposta JSON con il messaggio di errore
    res.json({
        error: err.message
    });
}

// Esporta la funzione in modo che possa essere utilizzata in altre parti dell'applicazione
module.exports = errorsHandler;