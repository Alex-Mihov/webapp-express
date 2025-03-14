// Importa il modulo multer per la gestione degli upload di file
const multer = require("multer");

// Configura lo storage per multer
const storage = multer.diskStorage({
    // Imposta la destinazione dei file caricati
    destination: "./public/img/movies_cover",
    // Imposta il nome del file caricato
    filename: (req, file, cb) => {
        // Crea un nome unico per il file utilizzando la data corrente e il nome originale del file
        const uniqueName = `${Date.now()}-${file.originalname}`;
        // Passa il nome unico al callback di multer
        cb(null, uniqueName);
    },
});

// Crea un'istanza di multer con la configurazione di storage
const upload = multer({ storage });

// Esporta l'istanza di multer per poterla usare in altre parti dell'applicazione
module.exports = upload;