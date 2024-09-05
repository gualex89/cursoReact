import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemon } from "./pokemonSlice"

export const getPokemons = (page = 0) => {

  return async ( dispatch, getState ) => {
    dispatch(startLoadingPokemon())

    //TODO: realizar peticion http

    /* const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
    const data = await respuesta.json();
    console.log(data); */

    const {data}  = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    
    

    dispatch(setPokemons({pokemons: data.results, page: page + 1}));
  }

}
