"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Typography, Paper } from "@mui/material";

const EducationTimeline = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  });

  return (
    <Timeline position="alternate" sx={{ mt: 6 }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div data-aos="fade-down" data-aos-anchor-placement="top-bottom">
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
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  fontSize: "30px",
                }}
              >
                Garisson University Lahore
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "lightgrey", fontFamily: "inria sans" }}
              >
                Bachelor-BSCS
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "lightgrey", fontFamily: "inria sans" }}
              >
                2019 - 2023
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "lightgrey", fontFamily: "inria sans" }}
              >
                CGPA 3.4
              </Typography>
            </Paper>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
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
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  fontSize: "30px",
                }}
              >
                Garisson College
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "lightgrey", fontFamily: "inria sans" }}
              >
                ICS
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "lightgrey", fontFamily: "inria sans" }}
              >
                2017 - 2019
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "lightgrey", fontFamily: "inria sans" }}
              >
                Grade: 62%
              </Typography>
            </Paper>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
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
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  fontSize: "30px",
                }}
              >
                Govt School
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "lightgrey", fontFamily: "inria sans" }}
              >
                Matriculation
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "lightgrey", fontFamily: "inria sans" }}
              >
                2015 - 2017
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "lightgrey", fontFamily: "inria sans" }}
              >
                Grade: 85%
              </Typography>
            </Paper>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default EducationTimeline;
