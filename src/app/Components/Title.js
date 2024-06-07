"use client";
import Socialicons from "./Socialicons";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
function Page() {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  });
  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "65vh",
          "@media (max-width: 521px)": {
            width: "auto",
          },
        }}
      >
        <div data-aos="zoom-out-right">
          <Typography
            sx={{
              fontFamily: "Lobster",
              fontSize: "50px",
              color: "#09b4fe",
              fontWeight: "400",
            }}
          >
            Hi!
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lugrasimo",
              fontSize: "50px",
              color: "#09b4fe",
              lineHeight: 0.7,
            }}
          >
            I am
          </Typography>
          <Typography
            sx={{ fontFamily: "Lugrasimo", fontSize: "50px", color: "#09b4fe" }}
          >
            Waqar Akram
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "40px",
              color: "#87CEEB",
              fontWeight: "200",
            }}
          >
            Full Stack Developer
          </Typography>
          <Typography
            sx={{
              color: "gray",
              fontFamily: "Signika",
              fontSize: "14px",
              fontWeight: "200",
              fontStyle: "italic",
            }}
          >
            As a full stack developer, I excel in both frontend and backend
            development, ensuring that every aspect of the web application is
            crafted with precision and efficiency. I specialize in MERN stack
            development, creating dynamic and responsive web applications with
            seamless integration between frontend and backend components.
          </Typography>

          <Box
            sx={{
              display: "flex",
              mt: 2,
              gap: 4,
              "@media (max-width: 879px)": {
                flexDirection: "column",
                alignItems: "center", // Adjusted width for screens wider than 1200px
              },
            }}
          >
            <Link
              href=""
              onClick={openResume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  borderColor: "#09b4fe",
                }}
              >
                Resume
              </Button>
            </Link>
          </Box>

          <Socialicons />
        </div>
      </Box>
    </>
  );
}

export default Page;
