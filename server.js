//---Bringing in Express module /Import the Express module by typing the command npm i express in the terminal
const express = require('express');
const pokemon = require("./models/pokemon.js");


 //--Connect express instance to the variable "app" // i.e Create our express app
const app = express();
//  let dataBase = pokemon
const PORT = 3000  // Sets the port, app should listen to


//Middleware (app.set)
app.set("view engine", "jsx")
app.engine("jsx",require("express-react-views").createEngine())


//All Routes (app.get)
app.get('/', (req, res) => {
    res.send(' Welcome to the Pokemon Express App!');
})
// app.get('/pokemon', (req, res) => {
//     res.send(' pokemon');
// })

// pokemon route (/pokemon) to render the Index.jsx
app.get('/pokemon', (req, res) => {
    res.render('Index');
})


// New route --> Show each Pokemon
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});


// route using /:id params  to render the Show.jsx
app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {index:req.params.id}); //passing id as props
});

//POST ---> Create New Pokemon

app.post("/pokemon", async (req, res) => {
    if (req.body.isAPokemon === "on") {
        req.body.isAPokemon = true;
    } else {
        req.body.isAPokemon = false;
    }
    const newPokemon = await pokemon.create(req.body);
    // await res.send(newFruit);
    console.log(pokemon);
    res.redirect("/pokemon");
  });

  // app.get("/pokemon/:id", async (req, res) => {
  //   const eachPokemon = await pokemon.findById(req.params.id);
  //   await res.render("pokemon/Show", {
  //     pokemon: eachPokemon,
  //   });
  // });
  







// At the bottom of every server, Tell our express app to "listen" to whatever port
app.listen(PORT, ()=>{
    console.log(`Listen to port, ${PORT} `)
})