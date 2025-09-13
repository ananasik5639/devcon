import React, { useState, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  useScrollTrigger,
  List,
  ListItem,
  ListItemText,
  alpha,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as ScrollLink } from 'react-scroll';

/**
 * Header component with responsive navigation
 * Features:
 * - Smooth scroll navigation
 * - Mobile-first responsive design
 * - No janky layouts or extra icons
 * - Clean, professional code structure
 */
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const trigger = useScrollTrigger({ threshold: 100 });

  // Navigation items configuration
  const menuItems = [
    { name: 'Главная', to: 'hero' },
    { name: 'О сериале', to: 'about' },
    { name: 'Персонажи', to: 'characters' },
    { name: 'Сезоны', to: 'seasons' }
   
  ];

  // Handlers with useCallback for performance
  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(prev => !prev);
  }, []);

  const handleMenuClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  // Desktop navigation items
  const renderDesktopMenu = () => (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
      {menuItems.map((item) => (
        <ScrollLink
          key={item.to}
          to={item.to}
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          style={{ textDecoration: 'none' }}
        >
          <Typography
            component="span"
            sx={{
              color: '#ffffff',
              fontFamily: '"Courier New", monospace',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#ffb300',
                textShadow: '0 0 8px rgba(255, 179, 0, 0.8)',
                background: alpha('#ffb300', 0.1)
              },
              '&:active': {
                transform: 'scale(0.95)'
              }
            }}
          >
            {item.name}
          </Typography>
        </ScrollLink>
      ))}
    </Box>
  );

  // Mobile drawer component
  const renderMobileDrawer = () => (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better mobile performance
        BackdropProps: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(4px)'
          }
        }
      }}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 280,
          background: 'linear-gradient(135deg, #0c0c2d 0%, #1a1a4a 100%)',
          borderRight: '2px solid #ffb300',
          boxShadow: '0 0 30px rgba(255, 0, 0, 0.4)'
        }
      }}
    >
      <Box sx={{ p: 2, borderBottom: '1px solid rgba(255, 179, 0, 0.3)' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="h6"
            sx={{
              color: '#ffb300',
              fontFamily: '"Press Start 2P", cursive',
              fontSize: '0.9rem',
              letterSpacing: '1px'
            }}
          >
            МЕНЮ
          </Typography>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: '#ffb300',
              '&:hover': {
                color: '#ffffff',
                background: alpha('#ffb300', 0.1)
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      <List sx={{ p: 0 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.to}
            component={ScrollLink}
            to={item.to}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleMenuClick}
            sx={{
              borderBottom: '1px solid rgba(255, 179, 0, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: alpha('#ffb300', 0.05),
                '& .MuiListItemText-primary': {
                  color: '#ffb300',
                  textShadow: '0 0 4px rgba(255, 179, 0, 0.6)'
                }
              }
            }}
          >
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                sx: {
                  color: '#ffffff',
                  fontFamily: '"Courier New", monospace',
                  fontWeight: 600,
                  textAlign: 'center',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }
              }}
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ p: 3, mt: 'auto', borderTop: '1px solid rgba(255, 179, 0, 0.1)' }}>
        <Typography
          variant="caption"
          sx={{
            color: alpha('#ffb300', 0.7),
            fontFamily: '"Courier New", monospace',
            fontSize: '0.75rem',
            textAlign: 'center',
            display: 'block'
          }}
        >
          Stranger Things © 2024
        </Typography>
      </Box>
    </Drawer>
  );

  return (
    <>
      <AppBar
        position="fixed"
        component="nav"
        sx={{
          background: trigger ? alpha('#0c0c2d', 0.98) : 'transparent',
          backdropFilter: trigger ? 'blur(10px)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: 'none',
          borderBottom: trigger ? `1px solid ${alpha('#ffb300', 0.1)}` : 'none'
        }}
      >
        <Toolbar sx={{ minHeight: { xs: '64px', md: '72px' } }}>
          {/* Logo */}
         

          {/* Desktop Navigation */}
          {renderDesktopMenu()}

          {/* Mobile Menu Button */}
          <IconButton
            aria-label="open navigation menu"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: 'none' },
              color: '#ffb300',
              ml: 1,
              '&:hover': {
                color: '#ffffff',
                background: alpha('#ffb300', 0.1)
              },
              transition: 'all 0.3s ease'
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      {renderMobileDrawer()}

      {/* Spacer for fixed header */}
      <Box sx={{ height: { xs: '64px', md: '72px' } }} />
    </>
  );
};

export default Header;