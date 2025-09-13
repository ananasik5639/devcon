import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import { keyframes } from '@emotion/react';

// Анимации
const blinkCaret = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: #ffb300; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  const fullText = `1983 год, штат Индиана. Маленький городок Хоукинс становится эпицентром сверхъестественных событий, когда таинственным образом исчезает мальчик по имени Уилл Байерс. Его друзья начинают собственное расследование и сталкиваются с невероятными явлениями, правительственными заговорами и опасными экспериментами.\n\nСериал сочетает в себе элементы научной фантастики, хоррора и ностальгии по 80-м, создавая уникальную атмосферу, которая покорила миллионы зрителей по всему миру.`;

  // Отслеживание появления секции в viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Анимация печатания текста
  useEffect(() => {
    if (!isVisible) return;

    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 10); // Скорость печати (меньше = быстрее)

      return () => clearTimeout(timer);
    }
  }, [currentIndex, isVisible, fullText]);

  return (
    <Box 
      ref={sectionRef}
      id="about"
      sx={{ 
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #0c0c2d 0%, #1a1a4a 50%, #0c0c2d 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 30%, rgba(255, 179, 0, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(230, 57, 70, 0.05) 0%, transparent 50%)
          `,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Заголовок раздела */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography 
            variant="h2"
            component="h2"
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
            О СЕРИАЛЕ
          </Typography>
          
          <Box 
            sx={{ 
              width: 100, 
              height: 2, 
              background: 'linear-gradient(90deg, transparent, #ffb300, transparent)',
              mx: 'auto',
              mb: 4
            }}
          />
        </Box>

        <Grid container spacing={4} alignItems="center">
          {/* Текстовый блок с настоящей анимацией печатания */}
          <Grid item xs={12} md={6}>
            <Box 
              sx={{
                //background: 'rgba(12, 12, 45, 0.7)',
                //backdropFilter: 'blur(10px)',
                //border: '1px solid rgba(255, 179, 0, 0.2)',
                p: { xs: 3, md: 4 },
                position: 'relative',
                minHeight: '300px'
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <Typography 
                  variant="body1"
                  sx={{
                    color: '#ffffff',
                    fontFamily: '"Courier New", monospace',
                    lineHeight: 1.8,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    textAlign: 'justify',
                    whiteSpace: 'pre-wrap', // Сохраняем переносы строк
                    minHeight: '200px'
                  }}
                >
                  {displayedText}
                  {/* Мигающий курсор */}
                  {currentIndex < fullText.length && (
                    <Box
                      component="span"
                      sx={{
                        width: '2px',
                        height: '1.2em',
                        background: '#ffb300',
                        animation: `${blinkCaret} 0.75s step-end infinite`,
                        marginLeft: '2px',
                        verticalAlign: 'text-bottom'
                      }}
                    />
                  )}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Блок с фактами с одинаковой высотой */}
          <Grid item xs={12}>
            <Box 
              sx={{ 
                textAlign: 'center',
                mt: 8,
                animation: `${fadeIn} 1s ease-out ${currentIndex >= fullText.length ? 1 : 0}s forwards`,
                opacity: currentIndex >= fullText.length ? 1 : 0
              }}
            >
              <Typography 
                variant="h5"
                sx={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  color: '#ffb300',
                  fontSize: { xs: '1.4rem', md: '1.8rem' },
                  mb: 4,
                  letterSpacing: '3px'
                }}
              >
                 ИНТЕРЕСНЫЕ ФАКТЫ 
              </Typography>

              <Grid container spacing={3} justifyContent="center" alignItems="stretch">
                {[
                  { icon: '🎬', text: 'Снято братьями Даффер', delay: 0 },
                  { icon: '🏆', text: '7 премий Эмми', delay: 0.2 },
                  { icon: '⭐', text: '4 сезона', delay: 0.4 },
                  { icon: '🌍', text: '190 стран просмотра', delay: 0.6 },
                  { icon: '📺', text: '80-е ностальгия', delay: 0.8 },
                  { icon: '🔮', text: 'Научная фантастика', delay: 1.0 }
                ].map((fact, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                    <Box 
                      sx={{ 
                        animation: `${fadeIn} 0.8s ease-out ${fact.delay + (currentIndex >= fullText.length ? 1 : 0)}s forwards`,
                        opacity: currentIndex >= fullText.length ? 1 : 0,
                        transform: currentIndex >= fullText.length ? 'translateY(0)' : 'translateY(20px)',
                        p: 3,
                        background: 'rgba(255, 179, 0, 0.05)',
                        border: '1px solid rgba(255, 179, 0, 0.1)',
                        borderRadius: '4px',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '120px',
                        width: '200px',
                        textAlign: 'center',
                        '&:hover': {
                          background: 'rgba(255, 179, 0, 0.1)',
                          borderColor: 'rgba(255, 179, 0, 0.3)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      <Box 
                        sx={{ 
                          fontSize: '2rem',
                          mb: 1.5,
                          lineHeight: 1
                        }}
                      >
                        {fact.icon}
                      </Box>
                      <Typography 
                        variant="body2"
                        sx={{
                          color: '#ffffff',
                          fontFamily: '"Courier New", monospace',
                          fontSize: '0.9rem',
                          fontWeight: 'bold',
                          lineHeight: 1.3
                        }}
                      >
                        {fact.text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Декоративная строка внизу */}
        <Box 
          sx={{ 
            textAlign: 'center',
            mt: 8,
            animation: `${fadeIn} 1s ease-out ${currentIndex >= fullText.length ? 2 : 0}s forwards`,
            opacity: currentIndex >= fullText.length ? 1 : 0
          }}
        >
          <Typography 
            variant="caption"
            sx={{
              color: '#ffb300',
              fontFamily: '"Press Start 2P", cursive',
              fontSize: '0.6rem',
              letterSpacing: '2px',
              opacity: 0.7
            }}
          >
            CLASSIFIED • TOP SECRET • EYES ONLY
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;