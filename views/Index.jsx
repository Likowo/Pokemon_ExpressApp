import React from 'react'
import pokemon from '../models/pokemon';

function Index(props) {

    // const myStyle = {
    //     color: '#ffffff',
    //     backgroundColor: '#000000',
    //     };
        
    //     class MyFirstComponent extends React.Component() {
    //     return (
    //         <div style={myStyle}>My First React Component!</div>
    //     )
    //     };

    return (

        <div>
            <nav>
    <a href="/pokemon/new">Create a New Pokemon</a>
    </nav>
            
            <h1><b>All The Pokemons!</b></h1>
      
          {pokemon.map((poke, i) => {
            return (
              <div key={i}>
                <a href={`/pokemon/${i}`}>
                  <h2>{pokemon[i].name}</h2>
                </a>
              </div>
            );
          })}
        </div>
      );
}

export default Index;