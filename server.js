//---Bringing in Express module /Import the Express module by typing the command npm i express in the terminal
const express = require('express');
const pokemon = require("./models/pokemon.js");


 //--Connect express instance to the variable "app" // i.e Create our express app
const app = express();
const pokemon = pokemon()
const PORT = 3000  // Sets the port, app should listen to


//Middleware (app.set)


//All Routes (app.get)
app.get('/', (req, res) => {
    res.send(' Welcome to the Pokemon Express App!');
})


app.get('/pokemon', (req, res) => {
    res.send(pokemon);
})







// At the bottom of every server, Tell our express app to "listen" to whatever port
app.listen(PORT, ()=>{
    console.log(`Listen to port, ${PORT} `)
})