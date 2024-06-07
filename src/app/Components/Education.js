"use client";
import React from "react";
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
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            elevation={3}
            style={{
              padding: "6px 16px",
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
              Lahore Garrison University
            </Typography>
            <Typography variant="body1">
              Bachelor of Science in Computer Science
            </Typography>
            <Typography variant="body2">2019 - 2024</Typography>
            <Typography variant="body2">CGPA: 3.4</Typography>
            <Typography variant="body2">
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={{ padding: "6px 16px" }}>
            <Typography variant="h6">Garrison College</Typography>
            <Typography variant="body1">Intermediate</Typography>
            <Typography variant="body2">2017 - 2019</Typography>
            <Typography variant="body2">Grade: 62%</Typography>
            <Typography variant="body2">
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} style={{ padding: "6px 16px" }}>
            <Typography variant="h6">Government High School</Typography>
            <Typography variant="body1">Matriculation</Typography>
            <Typography variant="body2">2015 - 2017</Typography>
            <Typography variant="body2">Grade: 85%</Typography>
            <Typography variant="body2">
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default EducationTimeline;
