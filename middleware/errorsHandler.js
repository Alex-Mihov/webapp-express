// funzione per errore server 
function errorsHandler(err, req, res, next) {
    res.status(500)
    res.json({
        error: err.message
        
    });
};

// esportiamo la funzione
module.exports = errorsHandler;