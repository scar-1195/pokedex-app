import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonApi } from '../api';
import { onSetPokemonData, onStartLoading } from '../store';

export const usePokemonSlice = () => {
  const { isLoading, pokemons } = useSelector(state => state.pokemonReducer);
  const dispatch = useDispatch();

  const startLoadingPokemons = async (offset) => {
    dispatch(onStartLoading());
    const { data } = await pokemonApi.get(`pokemon?offset=${offset}&limit=20`);
    const { results } = await data;
    const fetches =  results.map(async pokemon => await axios.get(pokemon.url));
    const pokeDataWithSprites = await Promise.all(fetches);
    dispatch(onSetPokemonData({ pokemons: pokeDataWithSprites }));
  };

  const getPokemonById = async id => {
    dispatch(onStartLoading());
    const { data } = await pokemonApi.get(`pokemon/${id}`);
    dispatch(onSetPokemonData({ pokemons: data }));
  };

  return {
    isLoading,
    pokemons,
    startLoadingPokemons,
    getPokemonById,
  };
};
