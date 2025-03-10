const connection = require("../data/movies_db")

// funzione index
function index(req, res) {

    const mysql = `
    SELECT *
    FROM movies 
    `

    connection.query(mysql, (err, moviesResults) => {
        if (err) return res.status(500).json({ error: "Database query failed" });

        res.json(moviesResults);
    })
}

module.exports = { index };