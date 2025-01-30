import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Virtual Doctor App",
    description:
      "A Doctor app that the pation can take the appoioment online through this app.",
    image: "/portfolio/assets/images/doctor1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/NajeebullahSadiq/Virtual-Doctor/tree/master",
    demo: "https://github.com/NajeebullahSadiq",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    image: "/portfolio/assets/images/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/NajeebullahSadiq/QuickBuy/tree/master",
  },

  {
    title: "Construction Company Website",
    description:
      "A website for a construction company that provides detailed information about the company's services, projects...",
    image: "/portfolio/assets/images/construction.jpg",
    technologies: ["React", "MUI", "framer-motion", "lucide-react"],
    github: "https://github.com/NajeebullahSadiq/sialFinalProject",
    demo: "https://github.com/NajeebullahSadiq",
  },
  {
    title: "Suntec Portals",
    description:
      "Portals developed for SunTec City, focused on enhancing business operations, including features like a rewards system, merchant management, and more.",
    image: "/portfolio/assets/images/suntec.png",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "AWS"],
    github: "https://github.com/NajeebullahSadiq",
    demo: "https://github.com/NajeebullahSadiq",
  },
  {
    title: "Fiber optic Managment System for Afghanistan",
    description:
      "Developed FullStck App for Afghanistan's Fiber Optic Service Management System at the Ministry of Communication and IT.",
    image: "/portfolio/assets/images/fiber.jpg",
    technologies: ["React", "Sprint Boot", "MUI"],
    github: "https://github.com/NajeebullahSadiq",
    demo: "https://github.com/NajeebullahSadiq",
  },
  {
    title: "Developed over 20 Project",
    description:
      "I have developed over 20 projects, but I am unable to showcase them here as they were primarily admin portals and client-specific projects.",
    image: "/portfolio/assets/images/projects3.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "More..."],
    github: "https://github.com/NajeebullahSadiq",
    demo: "https://github.com/NajeebullahSadiq",
  },
];

const Projects = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 12,
        background:
          "linear-gradient(180deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)",
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
              background: "linear-gradient(135deg, #60A5FA 0%, #7C3AED 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Featured Projects
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(30, 41, 59, 0.4)",
                    backdropFilter: "blur(10px)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-10px)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mb: 2, color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      {project.technologies.map((tech) => (
                        <Typography
                          key={tech}
                          component="span"
                          sx={{
                            display: "inline-block",
                            mr: 1,
                            mb: 1,
                            px: 1.5,
                            py: 0.5,
                            borderRadius: "4px",
                            fontSize: "0.75rem",
                            background: "rgba(96, 165, 250, 0.1)",
                            border: "1px solid rgba(96, 165, 250, 0.2)",
                            color: "primary.light",
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Button
                        variant="outlined"
                        startIcon={<Github size={16} />}
                        href={project.github}
                        target="_blank"
                        sx={{
                          borderColor: "rgba(255, 255, 255, 0.2)",
                          "&:hover": {
                            borderColor: "primary.main",
                          },
                        }}
                      >
                        Code
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<ExternalLink size={16} />}
                        href={project.demo}
                        target="_blank"
                        sx={{
                          borderColor: "rgba(255, 255, 255, 0.2)",
                          "&:hover": {
                            borderColor: "primary.main",
                          },
                        }}
                      >
                        Demo
                      </Button>
                    </Box>
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

export default Projects;
