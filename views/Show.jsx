import React from 'react'
import pokemon from '../models/pokemon'

function Show(props) {

  return (
    <div>
        <h1> Gotta Catch 'Em All </h1>
        <span>Show route with pokemon's name, image and index number corresponding to the pokemon's array position </span>

        <h2>
            {pokemon[props.index]?.name}
        </h2>

        <img src={pokemon[props.index]?.img +".jpg"} alt="" />

        <a href={`/pokemon`}>
                  <h2>Back</h2>
                </a>

    </div>
  )
}

export default Show