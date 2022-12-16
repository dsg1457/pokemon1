import React from 'react'
import pokemon from '../models/pokemon'

const headerStyle = {
    color: '#ffffff',
    backgroundColor: '#000000'
}

function Index({pokemons}) {
  return (
    <div>
        <h1 style = {headerStyle}> See all the Pokemon! </h1> 
        <ul>
            {pokemons.map((pokemon, i) => {
                return (
                    <li key = {i}>
                        <a href = {`/pokemon/${i}`}>

                            {pokemon.name.toUpperCase()}
                        </a>
                    


                        
                    </li>
                )
            })}
        </ul>
        </div>
  )
}

export default Index


//{pokemons.name.charAt(0).toUpperCase()}
// {pokemons.name.slice(1)} 

//Making only the first letter be a capital