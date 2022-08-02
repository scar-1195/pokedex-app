import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const onOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const onCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Pokedex
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={onOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={onCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={onCloseNavMenu}>
                <Typography textAlign='center'>
                  <Link underline='none' component={RouterLink} to='/'>
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={onCloseNavMenu}>
                <Typography textAlign='center'>
                  <Link underline='none' component={RouterLink} to='/search'>
                    Search
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant='text'
              onClick={onCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link
                underline='none'
                component={RouterLink}
                to='/'
                sx={{ color: 'white', display: 'block' }}
              >
                Home
              </Link>
            </Button>

            <Button
              variant='text'
              onClick={onCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link
                underline='none'
                component={RouterLink}
                to='/search'
                sx={{ color: 'white', display: 'block' }}
              >
                Search
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
