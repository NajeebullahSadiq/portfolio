import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import { Menu as MenuIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const pages = ['Home', 'About', 'Projects', 'Blog', 'Rewards', 'Contact'];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigation = (page: string) => {
    handleCloseNavMenu();
    if (page === 'Home') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(page.toLowerCase());
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(page.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolled
          ? 'rgba(15, 23, 42, 0.8)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onClick={() => handleNavigation('Home')}
            >
              NS
            </Typography>
          </motion.div>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleNavigation(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page, index) => (
              <motion.div
                key={page}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  onClick={() => handleNavigation(page)}
                  sx={{
                    my: 2,
                    mx: 2,
                    color: 'white',
                    display: 'block',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease-in-out',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {page}
                </Button>
              </motion.div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar