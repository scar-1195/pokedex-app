import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from '../components';
import { usePokemonSlice } from '../hooks';

export const PokemonPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isLoading, pokemons, startLoadingPokemons, getPokemonById } =
    usePokemonSlice();
  const { sprites } = pokemons;

  useEffect(() => {
    getPokemonById(id);
  }, []);

  const onNavigateBack = () => {
    startLoadingPokemons();
    navigate('/');
  };

  if (isLoading || sprites === undefined) {
    return <Loading />;
  }

  return (
    <Grid container>
      <Card sx={{ minWidth: 275, minHeight: '89vh' }}>
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
          <Typography variant='body2'>well meaning and kindly.</Typography>
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
