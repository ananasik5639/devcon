// Import React
import React from 'react'

// Import all necessary components from Material UI
import { Container, Typography, Box } from '@mui/material'

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CharactersSection from './components/CharactersSection';
import SeasonsSection from './components/SeasonsSection';


// Main component - function
function App() {
  // Return JSX-grid

   

  return (
    <>
    <Box
      sx={{
        minHeight: '100vh',
        //background: 'linear-gradient(135deg, #0c0c2d 0%, #1a1a4a 100%)',//
        //color: 'white',//
        fontFamily: '"Courier New", monospace',
        
        
      }}
    >
      <Header />
      
      <Box component="main">
        <Hero /> 
        <About /> 
        <CharactersSection />
        <SeasonsSection />


      </Box>
    </Box>
    
    </>
  )
}

export default App