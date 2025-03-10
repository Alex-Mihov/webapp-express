const express = require("express");
const app = express();
const port = process.env.PORT;

const moviesRouters = require("./routers/moviesRouters")

const imagePathMiddleware = require("./middleware/imagePath")

// importo il middleware di gestione 404
const notFound = require("./middleware/notFound")

// importo il middleware di gestione errore server
const errorsHandler = require("./middleware/errorsHandler")


// impostiamo file statici
app.use(express.static("public"));

// body parser
app.use(express.json());


// registro middlware delle img path
app.use(imagePathMiddleware)

// utilizzo errore notFound 404
app.use(notFound)

// utilizzo errore di server
app.use(errorsHandler)

// rotta home 
app.get("/api", (req, res) => {
    res.json("Benvenuto nella rotta principale!")
});

// rotta dei film e difianiamo la parte iniziale 
app.use("/api/movies", moviesRouters);

// avviamo il server e lo mettiamo in ascolto 
app.listen(port, () => {
    console.log(`Server avviato e in ascolto sulla porta ${port}`);

})