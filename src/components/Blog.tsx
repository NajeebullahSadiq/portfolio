import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    id: 'future-web-development',
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies that will shape the future of web development.',
    date: 'January 29, 2025',
    image: '/portfolio/assets/images/blog.jpg',
    readTime: '5 min read',
  },
  {
    id: 'react-performance',
    title: 'Exploring the New Features in React 2025',
    excerpt: 'Tips and tricks for optimizing your React applications for better performance.',
    date: 'February 2, 2025',
    image: '/portfolio/assets/images/react.jpg',
    readTime: '8 min read',
  },
  {
    id: 'scalable-architecture',
    title: 'Future of AI',
    excerpt: 'Exploring the Most Exciting AI Tools Shaping 2025 and Beyond to Unlock Benefits in Programming and Real-World Applications',
    date: 'February 10, 2025',
    image: '/portfolio/assets/images/ai.jpg',
    readTime: '10 min read',
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <Box
      id="blog"
      component="section"
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)',
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              mb: 8,
              background: 'linear-gradient(135deg, #60A5FA 0%, #7C3AED 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Latest Blog Posts
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={4} key={post.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  onClick={() => navigate(`/blog/${post.id}`)}
                  sx={{
                    height: '100%',
                    background: 'rgba(30, 41, 59, 0.4)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      '& .MuiCardMedia-root': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <Box sx={{ overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      image={post.image}
                      alt={post.title}
                      sx={{
                        transition: 'transform 0.3s ease-in-out',
                        height: 200,
                        widows: 200
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'primary.light',
                          mr: 2,
                        }}
                      >
                        {post.date}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.6)',
                        }}
                      >
                        {post.readTime}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        lineHeight: 1.4,
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: 1.6,
                      }}
                    >
                      {post.excerpt}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;