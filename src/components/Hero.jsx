import React from 'react';
import { Container, Typography, Button, Box, useTheme, useMediaQuery } from '@mui/material';
import backgroundDesktop from '../assets/back_for_dekstop.png';
import backgroundTablet from '../assets/back_for_tablet.png';
import backgroundMobile from '../assets/back_for_mobile.png';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const getBackgroundImage = () => {
    if (isMobile) return backgroundMobile;
    if (isTablet) return backgroundTablet;
    return backgroundDesktop;
  };

  return (
    <Box 
      id="hero"
      sx={{ 
        minHeight: '100svh',
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
         // background: 'linear-gradient(135deg, rgba(12, 12, 45, 0.85) 0%, rgba(26, 26, 74, 0.7) 100%)',
        }
      }}
    >
      <Container 
        sx={{ 
          position: 'relative', 
          zIndex: 1, 
          textAlign: 'center',
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Typography 
          variant="h1" 
          component="h1"
          sx={{ 
            mb: 2,
            color: '#fff',
            fontFamily: '"Press Start 2P", cursive',
            textShadow: '0 0 10px #ff0000',
            fontSize: { 
              xs: '2.0rem', 
              sm: '2rem', 
              md: '3.5rem' 
            }
          }}
        >
          STRANGER THINGS
        </Typography>
        <Typography 
          variant="h5" 
          component="h2"
          sx={{ 
            color: '#ffffff',
            mb: 4,
            fontFamily: '"Press Start 2P", cursive',
            fontSize: { xs: '0.7rem', sm: '1.1rem' }
          }}
        >
          Хоукинс ждет тебя
        </Typography>
        <Button 
          variant="contained" 
          
           sx={{
        
        background: 'linear-gradient(145deg, #ffb300 0%, #e65c00 100%)',
        color: '#fff',
        fontFamily: '"Bebas Neue", sans-serif',
        fontSize: { xs: '0.6rem', sm: '1.1rem', md: '1.0rem' },
        fontWeight: '400',
        letterSpacing: '2px',
        textTransform: 'uppercase',
    
 
        borderRadius: '0', 
        border: '3px solid #fff',
        boxShadow: `
            0 0 0 2px #000,
            4px 4px 0 0 #000,
            4px 4px 0 2px #fff
            `,
    
       
        px: { xs: 2, sm: 2.5 },
        py: { xs: 0.8, sm: 1 },
        minWidth: '140px',
        minHeight: '36px',
    
    
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: 'translateY(0)',
    
        '&:hover': {
        background: 'linear-gradient(145deg, #e65c00 0%, #ffb300 100%)',
        transform: 'translateY(-2px)',
        boxShadow: `
            0 0 0 2px #000,
            6px 6px 0 0 #000,
            6px 6px 0 2px #fff,
            0 0 20px rgba(255, 179, 0, 0.6)
        `,
        '&::before': {
            
            position: 'absolute',
            left: '15px',
            animation: 'pulse 1s infinite'
        }
        },
        '&:active': {
        transform: 'translateY(1px)',
        boxShadow: `
            0 0 0 2px #000,
            2px 2px 0 0 #000,
            2px 2px 0 2px #fff
        `
        },
    
        position: 'relative',
        overflow: 'hidden',
        '&::after': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
        transition: 'left 0.5s ease'
        },
        '&:hover::after': {
        left: '100%'
        }
    }}
        >
          Смотреть трейлер
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;