import { Grid } from '@mui/material';
import { PokemonCard } from './PokemonCard';

export const PokemonList = ({ pokemons }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={2} sm={4} md={4}>
        {pokemons.map(({ data }) => (
          <PokemonCard key={data.id} {...data} />
        ))}
      </Grid>
    </Grid>
  );
};
