import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Award, Trophy, Star, Medal } from "lucide-react";

const rewards = [
  {
    title: "Best Developer Award",
    organization: "Governament of Goa, India",
    date: "October 2021",
    description:
      "Awarded for exceptional contributions to open-source projects and community development. from the CM of Goa, India",
    icon: <Award size={32} />,
    image:
      "/portfolio/assets/images/award.jpg",
  },
  {
    title: "Best Innovation Award",
    organization: "Tech Excellence Summit 2023, Goa, India",
    date: "December 2023",
    description:
      "Recognized for developing an innovative AI-powered solution that revolutionized customer service automation.",
    icon: <Trophy size={32} />,
    image:
      "/portfolio/assets/images/award1.png",
  },
];

const Rewards = () => {
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
            Rewards & Recognition
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {rewards.map((reward, index) => (
            <Grid item xs={12} md={6} key={reward.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    background: "rgba(30, 41, 59, 0.4)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "transform 0.3s ease-in-out",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      "& .reward-image": {
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={reward.image}
                    alt={reward.title}
                    className="reward-image"
                    sx={{
                      width: "100%",
                      height: 350,
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                  <Box sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: "50%",
                          background: "rgba(96, 165, 250, 0.1)",
                          color: "primary.main",
                        }}
                      >
                        {reward.icon}
                      </Box>
                      <Box>
                        <Typography variant="h5" gutterBottom>
                          {reward.title}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "primary.light" }}
                        >
                          {reward.organization}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 2 }}
                    >
                      {reward.description}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "rgba(255, 255, 255, 0.5)" }}
                    >
                      {reward.date}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Rewards;
