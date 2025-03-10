// funzione per pagina non trovata
function notFound(req, res, next) {
    res.status(404)
    res.json({
        error: "Not Found",
        message: "Pagina non trovato"
    });
};

// esporto la funzione 
module.exports = notFound;