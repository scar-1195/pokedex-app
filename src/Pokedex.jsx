import { useEffect } from 'react';
import { PokemonList } from './components/PokemonList';
import { usePokemonSlice } from './hooks';

export const Pokedex = () => {
  const { isLoading, pokemons, startLoadingPokemons } = usePokemonSlice();

  useEffect(() => {
    startLoadingPokemons();
  }, []);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <>
      <PokemonList pokemons={pokemons} />
    </>
  );
};
