import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Briefcase, Coffee } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(88, 28, 135, 0.8) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.1) 0%, rgba(124, 58, 237, 0.1) 50%, rgba(15, 23, 42, 0.1) 100%)',
        }}
      />

      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h1"
                sx={{
                  mb: 2,
                  background: 'linear-gradient(135deg, #60A5FA 0%, #7C3AED 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Hi, I'm Najeebullah Sadiq
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                Full Stack Developer
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1.1rem',
                  maxWidth: '600px',
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                Passionate about creating elegant solutions to complex problems. Specializing in full-stack development with expertise in modern web technologies.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Box sx={{ display: 'flex', gap: 3, justifyContent: { xs: 'center', md: 'flex-start' }, mb: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '50%',
                      background: 'rgba(96, 165, 250, 0.1)',
                      mb: 1,
                    }}
                  >
                    <Code2 size={24} color="#60A5FA" />
                  </Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Clean Code
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '50%',
                      background: 'rgba(96, 165, 250, 0.1)',
                      mb: 1,
                    }}
                  >
                    <Briefcase size={24} color="#60A5FA" />
                  </Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    3+ Years
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '50%',
                      background: 'rgba(96, 165, 250, 0.1)',
                      mb: 1,
                    }}
                  >
                    <Coffee size={24} color="#60A5FA" />
                  </Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    20+ Projects
                  </Typography>
                </Box>
                
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowRight />}
                onClick={scrollToProjects}
                sx={{
                  mt: 2,
                  px: 4,
                  py: 1.5,
                }}
              >
                View My Work
              </Button>
            </motion.div>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Box
                component="img"
                src="/portfolio/assets/images/profile.jpg"
                alt="Profile"
                sx={{
                  width: { xs: '280px', md: '400px' },
                  height: { xs: '280px', md: '400px' },
                  objectFit: 'cover',
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  boxShadow: '0 0 30px rgba(96, 165, 250, 0.3)',
                  border: '4px solid rgba(255, 255, 255, 0.1)',
                }}
              />
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;