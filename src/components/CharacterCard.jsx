import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, alpha } from '@mui/material';
import CharacterModal from './CharacterModal';

const CharacterCard = ({ character }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card sx={{ 
        width: { xs: 160, sm: 200, md: 240 },
        height: { xs: 260, sm: 300, md: 340 },
        background: `linear-gradient(135deg, ${alpha(character.color, 0.1)} 0%, ${alpha('#0c0c2d', 0.8)} 100%)`,
        border: `2px solid ${alpha(character.color, 0.3)}`,
        borderRadius: '16px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-12px) scale(1.02)',
          borderColor: character.color,
          boxShadow: `0 0 30px ${alpha(character.color, 0.4)}`,
          '& .character-image': {
            transform: 'scale(1.1)'
          }
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${character.color}, transparent)`,
          animation: 'flicker 3s infinite'
        }
      }}>
        {/* Avatar */}
        <Box sx={{ 
          position: 'relative', 
          height: { xs: 120, sm: 150, md: 180 },
          overflow: 'hidden'
        }}>
          <Box
            className="character-image"
            component="img"
            src={character.image}
            alt={character.name}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease'
            }}
          />
          <Box sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60%',
            background: 'linear-gradient(transparent 0%, #0c0c2d 90%)'
          }} />
        </Box>

        <CardContent sx={{ 
          p: { xs: 1.5, sm: 2 }, 
          textAlign: 'center',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: character.color, 
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
              letterSpacing: '1px',
              mb: { xs: 1, sm: 1.5 },
              lineHeight: 1.2
            }}
          >
            {character.name}
          </Typography>

          <Button
            variant="outlined"
            onClick={() => setModalOpen(true)}
            sx={{
              color: character.color,
              borderColor: alpha(character.color, 0.5),
              fontFamily: '"Courier New", monospace',
              fontSize: { xs: '0.7rem', sm: '0.8rem' },
              py: { xs: 0.5, sm: 1 },
              px: { xs: 1, sm: 2 },
              minWidth: 'auto',
              '&:hover': {
                bgcolor: alpha(character.color, 0.1),
                borderColor: character.color,
                transform: 'scale(1.05)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Подробнее
          </Button>
        </CardContent>
      </Card>

      <CharacterModal 
        character={character} 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
};

export default CharacterCard;