import React from "react";
import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

const Contact = () => {
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
            Get in Touch
          </Typography>
        </motion.div>

        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
                Let's Connect
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  textAlign: "center",
                }}
              >
                Feel free to reach out to me through the following channels. I'm
                always excited to connect and collaborate!
              </Typography>

              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography
                  variant="body1"
                  sx={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "1.1rem" }}
                >
                  <strong>Email:</strong> najeebullahsadiq590@gmail.com
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "1.1rem",
                    mt: 1,
                  }}
                >
                  <strong>Phone:</strong>+93705909689 
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <IconButton
                  component="a"
                  href="https://github.com/NajeebullahSadiq"
                  target="_blank"
                  sx={{
                    color: "primary.main",
                    border: "1px solid rgba(96, 165, 250, 0.2)",
                    "&:hover": {
                      backgroundColor: "rgba(96, 165, 250, 0.1)",
                    },
                  }}
                >
                  <Github />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/najeebullah-sadiq-3b896b178/"
                  target="_blank"
                  sx={{
                    color: "primary.main",
                    border: "1px solid rgba(96, 165, 250, 0.2)",
                    "&:hover": {
                      backgroundColor: "rgba(96, 165, 250, 0.1)",
                    },
                  }}
                >
                  <Linkedin />
                </IconButton>
                {/* <IconButton
                  component="a"
                  href="#"
                  target="_blank"
                  sx={{
                    color: "primary.main",
                    border: "1px solid rgba(96, 165, 250, 0.2)",
                    "&:hover": {
                      backgroundColor: "rgba(96, 165, 250, 0.1)",
                    },
                  }}
                >
                  <Instagram />
                </IconButton> */}
                <IconButton
                  component="a"
                  href="https://facebook.com/najib.sadiq.37"
                  target="_blank"
                  sx={{
                    color: "primary.main",
                    border: "1px solid rgba(96, 165, 250, 0.2)",
                    "&:hover": {
                      backgroundColor: "rgba(96, 165, 250, 0.1)",
                    },
                  }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  component="a"
                  href="mailto:najeebullahsadiq590@gmail.com"
                  sx={{
                    color: "primary.main",
                    border: "1px solid rgba(96, 165, 250, 0.2)",
                    "&:hover": {
                      backgroundColor: "rgba(96, 165, 250, 0.1)",
                    },
                  }}
                >
                  <Mail />
                </IconButton>
                <IconButton
                  component="a"
                  href="tel:+93705909689"
                  sx={{
                    color: "primary.main",
                    border: "1px solid rgba(96, 165, 250, 0.2)",
                    "&:hover": {
                      backgroundColor: "rgba(96, 165, 250, 0.1)",
                    },
                  }}
                >
                  <Phone />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
