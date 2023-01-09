import express from "express";

const app = express()

app.get('/hello', (req, res) => res.send('Hello Florent'));

app.listen(3000, ()=> console.log("Application démarrée sur le port 3000"));