"use client";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledImage = styled(Image)`
  @media (max-width: 700px) {
    display: none;
  }
`;
function Navbar() {
  const arr = [
    { href: "/", text: "Home" },
    { href: "/Project", text: "Projects" },
    { href: "/Education", text: "Education" },
  ];

  return (
    <>
      <Box
        sx={{
          mt: 8,
          width: "90%",
          margin: "auto",
          height: "auto",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          "@media (max-width: 700px)": {
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          },
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <StyledImage
            src="/logo.png"
            width={80}
            height={80}
            alt={"logo"}
            style={{
              "@media (max-width: 700px)": {
                display: "none",
              },
            }}
          ></StyledImage>
        </Link>

        <Box
          sx={{
            pr: 5,
            pt: 1.7,
            pl: 5,
            pb: 1.7,
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",

            alignItems: "center",
            display: "flex",
          }}
        >
          {arr.map((data, index) => (
            <Typography
              key={index}
              sx={{
                color: "white",
                fontFamily: "Poppins",
                fontWeight: "300",
                ml: 2.6,
              }}
            >
              <a
                href={data.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {data.text}
              </a>
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
