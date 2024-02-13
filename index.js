const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Rodrigo Martinez');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:3000 ${port}`);
});