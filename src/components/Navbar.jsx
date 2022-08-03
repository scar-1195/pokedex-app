import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';

import navbarIcon from '../assets/pokebola.png';

export const Navbar = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <img src={navbarIcon} height='30px' width='30px' />
          <Typography
            variant='h6'
            noWrap
            sx={{
              color: 'inherit',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              m: 2,
              textDecoration: 'none',
            }}
          >
            Pokedex
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box>
          <Typography
            component='a'
            href=''
            noWrap
            variant='h5'
            sx={{
              mr: 5,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Pokedex
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
