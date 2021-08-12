import React from "react"
import { useEffect, useState } from 'react';


const PokemonPage = ({ name }) => {

   
    const [pokemon, setPokemon]= useState( []);

    const searchPokemon = () =>{
 
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((resp,Response)=>resp.json())
    .then(data=>{

    setPokemon(data);


  }).catch((err)  => {
       
    window.alert('404-Page Not Found')
   
      
})

};

    

  useEffect(searchPokemon,  []) ;

    
    return <div>

     <h1>{pokemon?.name}</h1>
        
        {pokemon?.sprites && (
            <img src={pokemon.sprites.front_default} />
          )}

     {pokemon.types?.length > 0 && (
          <ul>
            {pokemon.types.map((t)=>{
              return <li>{t.type.name}</li> 
            }
            
            )}

          </ul>
        )}
    </div>

};


PokemonPage.getInitialProps = ({ query}) => {
     return {name: query.name }
    
};






export default PokemonPage;


