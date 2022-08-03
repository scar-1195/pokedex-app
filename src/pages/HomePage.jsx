import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Loading, PokemonList } from '../components';
import { usePokemonSlice } from '../hooks';

export const HomePage = () => {
  const [offset, setOffset] = useState(0);
  const { isLoading, pokemons, startLoadingPokemons } = usePokemonSlice();

  useEffect(() => {
    startLoadingPokemons(0);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const onPrevPage = () => {
    setOffset(offset - 20);
    startLoadingPokemons(offset);
  };

  const onNextPage = () => {
    setOffset(offset + 20);
    startLoadingPokemons(offset);
  };

  return (
    <>
      <PokemonList pokemons={pokemons} />
      <Button disabled={isLoading} variant='contained' onClick={onPrevPage}>
        Prev
      </Button>
      <Button disabled={isLoading} variant='contained' onClick={onNextPage}>
        Next
      </Button>
    </>
  );
};
