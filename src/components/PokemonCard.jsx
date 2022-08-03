import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, Link, Typography } from '@mui/material';

export const PokemonCard = ({ id, name, sprites }) => {
  return (
    <Card
      className='.glassmorphism_card'
      sx={{
        background:' rgba(255, 255, 255, 0.25)',
        boxShadow: '0, 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(4px)',
        webkitBackdropFilter: 'blur(4px)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        m: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
            underline='none'
            component={RouterLink}
            to={`/pokemon/${id}`}
            sx={{ color: 'white', display: 'block' }}
          >
            More Info
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};
