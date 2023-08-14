//---Bringing in Express module /Import the Express module by typing the command npm i express in the terminal
const express = require('express');

 //--Connect express instance to the variable "app" // i.e Create our express app
const app = express();
const PORT = 3000  // Sets the port, app should listen to

//Middleware (app.use)


//All Routes (app.get)
app.get('/', (req, res) => {
    res.send('Hello World. Welcome to Pokemon Express App');
})

app.get('/home', function(req, res) {
    res.send('<h1> Home Page </h1>');
  });






// At the bottom of every server, Tell our express app to "listen" to whatever port
app.listen(PORT, ()=>{
    console.log(`Listen to port, ${PORT} `)
})