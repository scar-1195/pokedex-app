import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, Link, Typography } from '@mui/material';

export const PokemonCard = ({ id, name, sprites }) => {
  return (
    <Card
      className='.glassmorphism_card'
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
        width: '300px',
      }}
    >
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
            component={RouterLink}
            sx={{ color: 'white', display: 'block' }}
            to={`/pokemon/${id}`}
            underline='none'
          >
            More Info
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};
