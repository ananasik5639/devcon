import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
  alpha 
} from '@mui/material';
import { 
  Close, 
  PlayArrow,
  CalendarToday,
  Theaters,
  Schedule 
} from '@mui/icons-material';
import { seasons } from '../data/seasons';
import { keyframes } from '@emotion/react';

const flicker = keyframes`
  0% { opacity: 0.8; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-2px); }
  100% { opacity: 0.8; transform: translateY(0); }
`;

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); 
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

const SeasonsSection = () => {
  const [selectedSeason, setSelectedSeason] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box id="seasons" sx={{ 
      py: { xs: 8, md: 12 },
      background: 'linear-gradient(135deg, #0c0c2d 0%, #1a1a4a 50%, #0c0c2d 100%)',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 30%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(78, 205, 196, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(249, 202, 36, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 60% 20%, rgba(108, 92, 231, 0.1) 0%, transparent 50%)
        `,
      }
    }}>
      

      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography 
            variant="h2"
            sx={{
              fontFamily: '"Press Start 2P", cursive',
              color: '#ffb300',
              textShadow: '0 0 10px #ff0000',
              fontSize: { xs: '1.5rem', md: '2.2rem' },
              mb: 3,
              animation: `${glitch} 0.5s infinite`,
              animationPlayState: 'paused',
              '&:hover': {
                animationPlayState: 'running'
              }
            }}
          >
            СЕЗОНЫ
          </Typography>
          
          <Typography 
            variant="h6"
            sx={{
              color: alpha('#fff', 0.8),
              fontFamily: '"Courier New", monospace',
              fontSize: { xs: '0.9rem', md: '1.1rem' },
              maxWidth: '600px',
              mx: 'auto',
              mb: 4
            }}
          >
            Действительно, очень странные дела...
          </Typography>

          <Box 
            sx={{ 
              width: 120, 
              height: 3, 
              background: 'linear-gradient(90deg, transparent, #ffb300, transparent)',
              mx: 'auto'
            }}
          />
        </Box>

        {/* Grid*/}
        <Grid container spacing={4} justifyContent="center">
          {seasons.map((season) => (
            <Grid item xs={12} md={6} key={season.id} sx={{ display: 'flex' }}>
              <Card 
                onClick={() => setSelectedSeason(season)}
                sx={{
                  background: `linear-gradient(135deg, ${alpha(season.color, 0.1)} 0%, ${alpha('#0c0c2d', 0.9)} 100%)`,
                  border: `2px solid ${alpha(season.color, 0.3)}`,
                  borderRadius: '16px',
                  p: 3,
                  flexGrow: 1,
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: season.color,
                    boxShadow: `0 0 30px ${alpha(season.color, 0.3)}`,
                    '&::before': {
                      opacity: 0.1
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, transparent, ${season.color}, transparent)`,
                    opacity: 0.05,
                    transition: 'opacity 0.3s ease'
                  }
                }}
              >
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                  {/* Image og season */}
                  <Box sx={{
                    width: 100,
                    height: 140,
                    position: 'relative',
                    flexShrink: 0,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: -4,
                      background: `linear-gradient(45deg, ${season.color}, transparent)`,
                      borderRadius: '8px',
                      opacity: 0.5,
                      zIndex: -1
                    }
                  }}>
                    <img 
                      src={season.image} 
                      alt={season.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        border: `2px solid ${season.color}`
                      }}
                    />
                    <Box sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: season.color,
                      background: alpha('#000', 0.7),
                      borderRadius: '50%',
                      p: 0.5,
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}>
                      <PlayArrow />
                    </Box>
                  </Box>

                  {/* Informational block */}
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography 
                      variant="h5"
                      sx={{
                        color: season.color,
                        fontFamily: '"Bebas Neue", sans-serif',
                        fontSize: '1.0rem',
                        letterSpacing: '2px',
                        mb: 1
                      }}
                    >
                      {season.title}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Chip
                        icon={<CalendarToday sx={{ fontSize: '16px' }} />}
                        label={season.year}
                        size="small"
                        sx={{
                          bgcolor: alpha(season.color, 0.1),
                          color: season.color,
                          fontFamily: '"Courier New", monospace'
                        }}
                      />
                      <Chip
                        icon={<Theaters sx={{ fontSize: '16px' }} />}
                        label={season.episodes}
                        size="small"
                        sx={{
                          bgcolor: alpha(season.color, 0.1),
                          color: season.color,
                          fontFamily: '"Courier New", monospace'
                        }}
                      />
                    </Box>

                    <Typography 
                      variant="body2"
                      sx={{
                        color: alpha('#fff', 0.9),
                        fontFamily: '"Courier New", monospace',
                        lineHeight: 1.5,
                        mb: 2,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {season.description}
                    </Typography>

                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      color: alpha(season.color, 0.7),
                      fontFamily: '"Courier New", monospace',
                      fontSize: '0.8rem'
                    }}>
                      <Schedule sx={{ fontSize: '16px', mr: 0.5 }} />
                      Нажмите для подробностей
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

       
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography 
            variant="caption"
            sx={{
              color: alpha('#ffb300', 0.6),
              fontFamily: '"Press Start 2P", cursive',
              fontSize: '0.6rem',
              letterSpacing: '2px'
            }}
          >
            MORE COMING SOON • STAY TUNED • HAWKINS
          </Typography>
        </Box>
      </Container>

      {/* Window with details */}
      <Dialog 
        open={!!selectedSeason} 
        onClose={() => setSelectedSeason(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, #0c0c2d 0%, #1a1a4a 100%)',
            border: '2px solid #ffb300',
            borderRadius: '16px'
          }
        }}
      >
        {selectedSeason && (
          <DialogContent sx={{ p: 4, position: 'relative' }}>
            <IconButton
              onClick={() => setSelectedSeason(null)}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                color: '#ffb300',
                bgcolor: alpha('#000', 0.5)
              }}
            >
              <Close />
            </IconButton>

            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <img 
                src={selectedSeason.image} 
                alt={selectedSeason.title}
                style={{
                  width: '200px',
                  height: '280px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  border: `3px solid ${selectedSeason.color}`,
                  boxShadow: `0 0 20px ${alpha(selectedSeason.color, 0.3)}`
                }}
              />
            </Box>

            <Typography 
              variant="h3"
              sx={{
                color: selectedSeason.color,
                fontFamily: '"Bebas Neue", sans-serif',
                textAlign: 'center',
                mb: 2,
                letterSpacing: '3px'
              }}
            >
              {selectedSeason.title}
            </Typography>

            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 3, 
              mb: 4 
            }}>
              <Chip
                icon={<CalendarToday />}
                label={selectedSeason.year}
                sx={{
                  bgcolor: alpha(selectedSeason.color, 0.1),
                  color: selectedSeason.color,
                  fontFamily: '"Courier New", monospace'
                }}
              />
              <Chip
                icon={<Theaters />}
                label={selectedSeason.episodes}
                sx={{
                  bgcolor: alpha(selectedSeason.color, 0.1),
                  color: selectedSeason.color,
                  fontFamily: '"Courier New", monospace'
                }}
              />
            </Box>

            <Typography 
              variant="body1"
              sx={{
                color: '#fff',
                fontFamily: '"Courier New", monospace',
                lineHeight: 1.8,
                textAlign: 'center',
                mb: 4
              }}
            >
              {selectedSeason.description}
            </Typography>

            <Box>
              <Typography 
                variant="h6"
                sx={{
                  color: selectedSeason.color,
                  fontFamily: '"Bebas Neue", sans-serif',
                  textAlign: 'center',
                  mb: 3
                }}
              >
                ◈ КЛЮЧЕВЫЕ СОБЫТИЯ
              </Typography>
              
              <Grid container spacing={2}>
                {selectedSeason.facts.map((fact, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 2,
                      bgcolor: alpha(selectedSeason.color, 0.05),
                      border: `1px solid ${alpha(selectedSeason.color, 0.2)}`,
                      borderRadius: '8px'
                    }}>
                      <Box sx={{
                        width: 8,
                        height: 8,
                        bgcolor: selectedSeason.color,
                        borderRadius: '50%',
                        mr: 2,
                        flexShrink: 0
                      }} />
                      <Typography 
                        variant="body2"
                        sx={{
                          color: '#fff',
                          fontFamily: '"Courier New", monospace'
                        }}
                      >
                        {fact}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default SeasonsSection;