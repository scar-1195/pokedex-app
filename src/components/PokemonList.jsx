import { Grid } from '@mui/material';
import { PokemonCard } from './PokemonCard';

export const PokemonList = ({ pokemons }) => {
  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={4} sm={8} md={12} sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          minHeight: '80vh',
        }}
      >
        {pokemons.map(({ data }) => (
          <PokemonCard key={data.id} {...data} />
        ))}
      </Grid>
    </Grid>
  );
};
