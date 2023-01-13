import express from "express";

const app = express()

app.get('/hello', (req, res) => res.send('Hello Florent bon week end'));

app.listen(3001, ()=> console.log("Application démarrée sur le port 3001"));