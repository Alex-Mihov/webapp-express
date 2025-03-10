const express = require("express");
const app = express();
const port = 3000;

const moviesRouters = require("./routers/moviesRouters")

const imagePathMiddleware = require("./middleware/imagePath")


// impostiamo file statici
app.use(express.static("public"));

// body parser
app.use(express.json());


// registro middlware delle img path
app.use(imagePathMiddleware)

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