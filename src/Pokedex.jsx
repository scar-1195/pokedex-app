// import { useEffect } from 'react';
// import { PokemonList } from './components/PokemonList';
// import { usePokemonSlice } from './hooks';

import { AppRouter } from './router';

export const Pokedex = () => {
  // const { isLoading, pokemons, startLoadingPokemons } = usePokemonSlice();

  // useEffect(() => {
  //   startLoadingPokemons();
  // }, []);

  // if (isLoading) {
  //   return <h1>Cargando...</h1>;
  // }

  return (
    <>
      <AppRouter />
      {/* <PokemonList pokemons={pokemons} /> */}
    </>
  );
};
