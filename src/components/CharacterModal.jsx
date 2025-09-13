import React from 'react';
import { Modal, Box, Typography, IconButton, Chip, alpha } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { keyframes } from '@emotion/react';

const flicker = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`;

const CharacterModal = ({ character, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} sx={{ backdropFilter: 'blur(5px)' }}>
      <Box sx={{ 
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '95vw', sm: '90vw', md: '700px' },
        maxWidth: '90vw',
        maxHeight: '90vh',
        bgcolor: alpha('#0c0c2d', 0.95),
        border: `3px solid ${character.color}`,
        borderRadius: '12px',
        boxShadow: `0 0 30px ${alpha(character.color, 0.3)}`,
        p: { xs: 3, md: 4 },
        overflow: 'auto',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(45deg, ${alpha(character.color, 0.1)} 0%, transparent 100%)`,
          pointerEvents: 'none'
        }
      }}>
        <IconButton
          onClick={onClose}
          sx={{ 
            position: 'absolute', 
            top: 12, 
            right: 12, 
            color: character.color,
            bgcolor: alpha('#000', 0.5),
            '&:hover': { bgcolor: alpha(character.color, 0.2) }
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box sx={{
            width: { xs: 120, md: 160 },
            height: { xs: 120, md: 160 },
            mx: 'auto',
            mb: 3,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: -4,
              background: `linear-gradient(45deg, ${character.color}, transparent)`,
              borderRadius: '50%',
              animation: `${flicker} 2s infinite`,
              zIndex: -1
            }
          }}>
            <img 
              src={character.image} 
              alt={character.name}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: '50%',
                border: `3px solid ${character.color}`,
                boxShadow: `0 0 20px ${alpha(character.color, 0.5)}`
              }}
            />
          </Box>

          <Typography variant="h3" sx={{ 
            color: character.color, 
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            letterSpacing: '2px',
            mb: 1
          }}>
            {character.name}
          </Typography>
          
          <Typography variant="h6" sx={{ 
            color: alpha('#fff', 0.8),
            fontFamily: '"Courier New", monospace',
            fontSize: { xs: '0.9rem', md: '1.1rem' },
            mb: 3
          }}>
            {character.fullName}
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ 
          color: '#fff', 
          mb: 4, 
          lineHeight: 1.8,
          fontFamily: '"Courier New", monospace',
          fontSize: { xs: '0.9rem', md: '1rem' },
          textAlign: 'center'
        }}>
          {character.description}
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ 
            color: character.color, 
            fontFamily: '"Bebas Neue", sans-serif',
            textAlign: 'center',
            mb: 3,
            fontSize: { xs: '1.2rem', md: '1.5rem' }
          }}>
            ◈ ОСОБЕННОСТИ ◈
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
            {character.facts.map((fact, index) => (
              <Chip
                key={index}
                label={fact}
                sx={{ 
                  bgcolor: alpha(character.color, 0.1),
                  color: character.color,
                  border: `1px solid ${alpha(character.color, 0.3)}`,
                  fontFamily: '"Courier New", monospace',
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  '&:hover': {
                    bgcolor: alpha(character.color, 0.2),
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CharacterModal;