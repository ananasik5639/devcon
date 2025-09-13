// Import function to create theme from MUI
import { createTheme, alpha } from '@mui/material/styles';
import { red, blue, amber } from '@mui/material/colors';





// Create and set up
const theme = createTheme({
  
  // Colors
  palette: {
    primary: {
      main: '#0c0c2d', // Dark-blue
      light: '#1a1a4a',   
    },
    secondary: {
      main: '#e63946',
    },
    accent: {
      main: '#ffb300', // Neon yellow
    },
    background: {
      default: '#0c0c2d',
      paper: '#1a1a4a',  
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffb300',
    },
  },
  // Fonts
  typography: {
    fontFamily: '"Bebas Neue", "Courier New", monospace',
    
    h1: {
      fontFamily: '"Press Start 2P", cursive',
      fontSize: '3rem',
      textShadow: '2px 2px 8px #ff0000',
    },
    h2: {
      fontFamily: '"Press Start 2P", cursive',
      fontSize: '2rem',
      textShadow: '1px 1px 4px #ffb300',
    },
    body1: {
      fontFamily: '"Courier New", monospace',
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@keyframes flicker': {
          '0%': { opacity: 0.8 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.8 }
        },
        body: {
          background: 'linear-gradient(45deg, #0c0c2d 0%, #1a1a4a 100%)',
          minHeight: '100vh',
        },
      },
    },
  },
});
// Export theme to use into main.jsx
export default theme;