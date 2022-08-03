import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { Loading } from '../components';
import { usePokemonSlice } from '../hooks';

export const PokemonPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isLoading, pokemons, startLoadingPokemons, getPokemonById } = usePokemonSlice();
  const { sprites, types } = pokemons;

  useEffect(() => {
    getPokemonById(id);
  }, []);

  const onNavigateBack = () => {
    startLoadingPokemons();
    navigate('/');
  };

  if (isLoading || sprites === undefined || types === undefined) {
    return <Loading />;
  }

  return (
    <Grid
      container
      sx={{
        backgroundColor: 'background.main',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        minHeight: '90vh',
      }}
    >
      <Card
        sx={{
          alignItems: 'center',
          backdropFilter: 'blur(4px)',
          background: ' rgba(255, 255, 255, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: '10px',
          boxShadow: '0, 8px 32px 0 rgba(31, 38, 135, 0.37)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          m: 3,
          webkitBackdropFilter: 'blur(4px)',
          width: '500px',
        }}
      >
        <CardContent>
          <Typography variant='h5' component='div'>
            {pokemons.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            {`Numero de pokedex: ${pokemons.id}`}
          </Typography>
          <img src={sprites.front_default} alt={sprites.front_default} />
          <img src={sprites.back_default} alt={sprites.back_default} />
          <img src={sprites.front_shiny} alt={sprites.front_shiny} />
          <img src={sprites.back_shiny} alt={sprites.back_shiny} />
          <Typography variant='body2'>Height: {pokemons.height}</Typography>
          <Typography variant='body2'>Weight: {pokemons.weight}</Typography>
        </CardContent>
        <CardActions>
          <Button size='small' variant='contained' onClick={onNavigateBack}>
            Return to Pokedex
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
