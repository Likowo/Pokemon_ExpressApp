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
            <h1><b>See All The Pokemons!</b></h1>
      
          {pokemon.map((p, i) => {
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