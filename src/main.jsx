// Import for work with DOM
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import theme for CSS from MUI
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Import our main app and theme
import App from './App'
import theme from './theme/theme'

// Import our styles
import './index.css'

// Creating root for react app
const root = ReactDOM.createRoot(document.getElementById('root'))

// Rendering our app into this root
root.render(
  // Add <React.StrictMode> for monitiring possible err
  <React.StrictMode>
    {/* ThemeProvider translate our theme to other components */}
    <ThemeProvider theme={theme}>
      {/* CssBaseline normolize styles for all browsers */}
      <CssBaseline />
      {/* Our main component for current app */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)