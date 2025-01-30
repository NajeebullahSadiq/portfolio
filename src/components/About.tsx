import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Code2, Palette, Terminal, Rocket } from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: <Code2 size={32} />, level: 90 },
  { name: "UI/UX Design", icon: <Palette size={32} />, level: 85 },
  { name: "Backend Development", icon: <Terminal size={32} />, level: 80 },
  { name: "DevOps", icon: <Rocket size={32} />, level: 75 },
];

const About = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 12,
        background:
          "linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%)",
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
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                I graduated with both a Bachelor's and Master's degree in
                Computer Science from Goa University. With years of experience
                in both frontend and backend development, I specialize in
                building scalable web applications that deliver exceptional user
                experiences.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                I am passionate about creating elegant solutions to complex
                problems and staying at the forefront of industry trends and
                best practices. I believe in writing clean, maintainable code
                and creating intuitive user interfaces that make technology
                accessible to everyone. I previously worked in Bangalore with
                top companies and am now contributing my skills at MCIT
                Afghanistan.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {skills.map((skill, index) => (
                <Grid item xs={12} sm={6} key={skill.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        height: "100%",
                        background: "rgba(30, 41, 59, 0.4)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <Box sx={{ mb: 2, color: "primary.main" }}>
                        {skill.icon}
                      </Box>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {skill.name}
                      </Typography>
                      <Box
                        sx={{
                          height: 4,
                          background: "rgba(255, 255, 255, 0.1)",
                          borderRadius: 2,
                          overflow: "hidden",
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          style={{
                            height: "100%",
                            background:
                              "linear-gradient(90deg, #60A5FA 0%, #7C3AED 100%)",
                            borderRadius: 8,
                          }}
                        />
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
