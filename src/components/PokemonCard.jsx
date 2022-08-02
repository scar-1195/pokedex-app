import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, Link, Typography } from '@mui/material';

export const PokemonCard = ({ name, sprites }) => {
  return (
    <Card>
      <CardContent>
        <img src={sprites.front_default} alt='' />
        <Typography variant='h5' component='div'>
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          <Link
            underline='none'
            component={RouterLink}
            to='/pokemon'
            sx={{ color: 'white', display: 'block' }}
          >
            More Info
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};
