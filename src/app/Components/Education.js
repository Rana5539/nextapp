"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Box, Typography, Paper } from "@mui/material";

const EducationTimeline = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);

  const educationData = [
    {
      institution: "Garisson University Lahore",
      degree: "Bachelor-BSCS",
      years: "2019 - 2023",
      grade: "CGPA 3.4",
      logo: "/lgu.png", // Update with the actual path to the logo
      animation: "fade-down",
    },
    {
      institution: "Garisson College",
      degree: "ICS",
      years: "2017 - 2019",
      grade: "Grade: 62%",
      logo: "/clg.png", // Update with the actual path to the logo
      animation: "zoom-in",
    },
  ];

  return (
    <Box
      sx={{
        mt: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      {educationData.map((item, index) => (
        <div
          key={index}
          data-aos={item.animation}
          data-aos-anchor-placement="top-bottom"
        >
          <Paper
            elevation={3}
            style={{
              padding: 17,
              background: "rgba(255, 255, 255, 0.25)",
              borderRadius: "30px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(28px)",
              textAlign: "center",
              color: "white",
              marginBottom: "20px",
              minWidth: "450px",
            }}
          >
            <img
              src={item.logo}
              alt={`${item.institution} logo`}
              style={{ height: "70px", marginBottom: "20px" }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "300",
                fontSize: "30px",
              }}
            >
              {item.institution}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "lightgrey", fontFamily: "inria sans" }}
            >
              {item.degree}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "lightgrey", fontFamily: "inria sans" }}
            >
              {item.years}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "lightgrey", fontFamily: "inria sans" }}
            >
              {item.grade}
            </Typography>
          </Paper>
        </div>
      ))}
    </Box>
  );
};

export default EducationTimeline;
