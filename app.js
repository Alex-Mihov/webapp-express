const express = require("express");
const app = express();
const port = 3000;


// rotta home 
app.get("/api", (req, res) => {
    res.json("Benvenuto nella rotta principale!")
});

// avviamo il server e lo mettiamo in ascolto 
app.listen(port, () => {
    console.log(`Server avviato e in ascolto sulla porta ${port}`);

})