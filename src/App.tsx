import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme/theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename='/portfolio/'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App