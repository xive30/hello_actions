import express from "express";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


const app = express()

app.get('/hello', (req, res) => res.send('Hello Florent' +  process.env.id ));

app.listen(3001, ()=> console.log("Application démarrée sur le port 3001"));