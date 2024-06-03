"use client";
import Image from "next/image";
import React from "react";
import { Box } from "@mui/material";
const ResponsiveMenu = () => {
  return (
    <>
      <div data-aos="zoom-out-right">
        <Box sx={{ width: "50vh" }}>
          <div className="cube">
            <div className="top"></div>
            <div>
              <span style={{ "--i": 0 }}>
                <h2>
                  <Image
                    src="/next.png"
                    width={80}
                    height={80}
                    alt={"hsdjsh"}
                  ></Image>
                </h2>
                <h2>
                  <Image
                    src="/next.png"
                    width={150}
                    height={150}
                    className="imageContainer"
                    alt={"hsdjsh"}
                  ></Image>
                </h2>
              </span>
              <span style={{ "--i": 1 }}>
                <h2>
                  <Image
                    src="/mongo.png"
                    width={80}
                    height={80}
                    alt={"hsdjsh"}
                  ></Image>
                </h2>
                <h2>
                  <Image
                    src="/mongo.png"
                    width={150}
                    height={150}
                    className="imageContainer"
                    alt={"hsdjsh"}
                  ></Image>
                </h2>
              </span>
              <span style={{ "--i": 2 }}>
                <h2>
                  <Image
                    src="/react.png"
                    width={80}
                    height={80}
                    alt={"hsdjsh"}
                  ></Image>
                </h2>
                <h2>
                  <Image
                    src="/react.png"
                    width={150}
                    height={150}
                    className="imageContainer"
                    alt={"hsdjsh"}
                  ></Image>
                </h2>
              </span>
              <span style={{ "--i": 3 }}>
                <h2>
                  <Image
                    src="/node.png"
                    width={80}
                    height={80}
                    alt={"hsdjsh"}
                  ></Image>
                </h2>
                <h2>
                  <Image
                    src="/node.png"
                    width={150}
                    height={150}
                    className="imageContainer"
                    alt={"hsdjsh"}
                  ></Image>
                </h2>
              </span>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default ResponsiveMenu;
