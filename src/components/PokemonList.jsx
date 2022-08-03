import { Grid } from '@mui/material';
import { PokemonCard } from './PokemonCard';

export const PokemonList = ({ pokemons }) => {
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid
        item xs={4} sm={8} md={12}
        sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          // backgroundColor: '#234590',
          minHeight: '80vh',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {pokemons.map(({ data }) => (
          <PokemonCard key={data.id} {...data} />
        ))}
      </Grid>
    </Grid>
  );
};
