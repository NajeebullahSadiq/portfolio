import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#60A5FA', // Blue
      light: '#93C5FD',
      dark: '#2563EB',
    },
    secondary: {
      main: '#A78BFA', // Purple
      light: '#C4B5FD',
      dark: '#7C3AED',
    },
    background: {
      default: '#0F172A',
      paper: 'rgba(30, 41, 59, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(30, 41, 59, 0.7)',
          borderRadius: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.75rem',
          textTransform: 'none',
          padding: '0.75rem 1.5rem',
          transition: 'all 0.3s ease-in-out',
        },
        contained: {
          background: 'linear-gradient(135deg, #60A5FA 0%, #7C3AED 100%)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 20px rgba(96, 165, 250, 0.3)',
          },
        },
      },
    },
  },
});