import React from 'react'
import { useCounter, useFetch } from '../hooks'

import { PokemonCard, LoadingMessage } from '../03-examples';

export const Layout = () => {

  const {counter, increment, decrement} = useCounter(3);


  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);



  

  return (
    <>
      <h1>Información de Pokemons</h1>
      <hr />

      {
        isLoading 
        ? <LoadingMessage/> 
        : <PokemonCard 
            id= {data.id} 
            name={data.name} 
            sprites={[
              data.sprites.front_default, 
              data.sprites.front_shiny, 
              data.sprites.back_default, 
              data.sprites.back_shiny
            ]}
          /> 
      }

      <h2>{data && data.name}</h2>
      {/* <h2>{data?.name}</h2> esto es lo mismo */}

      <button 
      className='btn btn-primary'
      onClick={ () => counter>1 && decrement()}
      >
        Anterior
      </button>

      <button 
      className='btn btn-primary'
      onClick={() => increment()}
      >
        Siguiente
      </button>

    
    </>
  )
}
