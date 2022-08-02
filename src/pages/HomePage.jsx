import { useEffect } from 'react';
import { Loading, PokemonList } from '../components';
import { usePokemonSlice } from '../hooks';

export const HomePage = () => {
  const { isLoading, pokemons, startLoadingPokemons } = usePokemonSlice();

  useEffect(() => {
    startLoadingPokemons();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <PokemonList pokemons={pokemons} />
    </>
  );
};
