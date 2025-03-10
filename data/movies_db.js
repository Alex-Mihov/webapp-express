// Importiamo il modulo mysql2 per interagire con il database MySQL
const mysql = require("mysql2");

// Creiamo una connessione al database "db_blog" usando le credenziali locali
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Stabilire la connessione con il database
connection.connect((err) => {
    if (err) throw err;  // Se c'è un errore durante la connessione, lo lanciamo
    console.log("connection to my sql");  // Messaggio di successo quando la connessione è stabilita
});

// Esportiamo la connessione per poterla usare in altre parti dell'app
module.exports = connection;