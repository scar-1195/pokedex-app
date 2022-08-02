import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, Typography } from '@mui/material';

export const PokemonCard = ({ name, sprites }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h5' component='div'>
          {name}
        </Typography>
        <img src={sprites.front_default} alt='' />
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};
