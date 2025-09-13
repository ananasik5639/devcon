import React, { useRef, useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  IconButton, 
  useMediaQuery, 
  alpha 
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import CharacterCard from './CharacterCard';
import { characters } from '../data/characters';

const CharactersSection = () => {
  const scrollRef = useRef(null);
  const isMobile = useMediaQuery('(max-width:600px)');
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 10);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    
    return () => {
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = isMobile ? 280 : 320;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(checkScrollPosition, 300);
    }
  };

  const handleScroll = () => {
    checkScrollPosition();
  };

  return (
    <Box id="characters" sx={{ 
      py: { xs: 6, md: 10 },
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      backgroundImage: 'url("/backgrounds/characters-bg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(12, 12, 45, 0.9) 0%, rgba(26, 26, 74, 0.8) 50%, rgba(12, 12, 45, 0.9) 100%)',
        zIndex: 1
      }
    }}>
      {/* Content*/}
      <Box sx={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <Container maxWidth="xl">
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography 
              variant="h2" 
              sx={{ 
                color: '#ffb300',
                fontFamily: '"Press Start 2P", cursive',
                fontSize: { xs: '1.5rem', md: '2.2rem' },
                textShadow: '0 0 10px #ff0000',
                mb: 2
              }}
            >
              ПЕРСОНАЖИ
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: alpha('#fff', 0.9),
                fontFamily: '"Courier New", monospace',
                fontSize: { xs: '0.9rem', md: '1.1rem' },
                maxWidth: '600px',
                mx: 'auto',
                textShadow: '0 0 5px #000'
              }}
            >
              Герои, которые изменили Хоукинс навсегда
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', px: { xs: 1, md: 0 } }}>
            {/* Left button navigation */}
            {showLeftButton && (
              <IconButton
                onClick={() => scroll('left')}
                sx={{
                  position: 'absolute',
                  left: { xs: -8, md: -16 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#ffb300',
                  bgcolor: alpha('#0c0c2d', 0.95),
                  border: '2px solid #ffb300',
                  zIndex: 10,
                  width: { xs: 36, md: 48 },
                  height: { xs: 36, md: 48 },
                  '&:hover': { 
                    bgcolor: alpha('#ffb300', 0.2),
                    transform: 'translateY(-50%) scale(1.1)'
                  },
                  display: { xs: 'none', sm: 'flex' }
                }}
              >
                <ChevronLeft />
              </IconButton>
            )}

            {/* Right button navigation */}
            {showRightButton && (
              <IconButton
                onClick={() => scroll('right')}
                sx={{
                  position: 'absolute',
                  right: { xs: -8, md: -16 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#ffb300',
                  bgcolor: alpha('#0c0c2d', 0.95),
                  border: '2px solid #ffb300',
                  zIndex: 10,
                  width: { xs: 36, md: 48 },
                  height: { xs: 36, md: 48 },
                  '&:hover': { 
                    bgcolor: alpha('#ffb300', 0.2),
                    transform: 'translateY(-50%) scale(1.1)'
                  },
                  display: { xs: 'none', sm: 'flex' }
                }}
              >
                <ChevronRight />
              </IconButton>
            )}

            {/* Container with horizontal scroll */}
            <Box
              ref={scrollRef}
              onScroll={handleScroll}
              sx={{
                display: 'flex',
                gap: { xs: 2, md: 3 },
                overflowX: 'auto',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { 
                  display: 'none' 
                },
                WebkitOverflowScrolling: 'touch',
                py: 3,
                px: { xs: 2, md: 3 },
                mx: { xs: -2, md: -3 },
                scrollSnapType: 'x mandatory',
                '& > *': {
                  scrollSnapAlign: 'start'
                },
                '&::after': {
                  content: '""',
                  minWidth: { xs: '16px', md: '32px' },
                  flexShrink: 0
                },
                '&::before': {
                  content: '""',
                  minWidth: { xs: '16px', md: '32px' },
                  flexShrink: 0
                }
              }}
            >
              {characters.map(character => (
                <Box 
                  key={character.id} 
                  sx={{ 
                    flexShrink: 0,
                    scrollSnapAlign: 'start'
                  }}
                >
                  <CharacterCard character={character} />
                </Box>
              ))}
            </Box>
          </Box>

          {/* Indicator of scrolling */}
          <Box sx={{ 
            textAlign: 'center', 
            mt: 3,
            display: { sm: 'none' }
          }}>
            <Typography variant="caption" sx={{ 
              color: alpha('#ffb300', 0.9),
              fontFamily: '"Courier New", monospace',
              display: 'block',
              mb: 1,
              textShadow: '0 0 3px #000'
            }}>
              ← проведите в сторону →
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 1 
            }}>
              {characters.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: alpha('#ffb300', 0.5),
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Button for mobile version */}
          <Box sx={{ 
            display: { xs: 'flex', sm: 'none' }, 
            justifyContent: 'center', 
            gap: 2, 
            mt: 3 
          }}>
            <IconButton
              onClick={() => scroll('left')}
              disabled={!showLeftButton}
              sx={{
                color: '#ffb300',
                bgcolor: alpha('#0c0c2d', 0.9),
                border: '2px solid #ffb300',
                '&:hover': { 
                  bgcolor: alpha('#ffb300', 0.2)
                },
                '&:disabled': {
                  opacity: 0.3,
                  borderColor: alpha('#ffb300', 0.3)
                }
              }}
            >
              <ChevronLeft />
            </IconButton>

            <IconButton
              onClick={() => scroll('right')}
              disabled={!showRightButton}
              sx={{
                color: '#ffb300',
                bgcolor: alpha('#0c0c2d', 0.9),
                border: '2px solid #ffb300',
                '&:hover': { 
                  bgcolor: alpha('#ffb300', 0.2)
                },
                '&:disabled': {
                  opacity: 0.3,
                  borderColor: alpha('#ffb300', 0.3)
                }
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CharactersSection;