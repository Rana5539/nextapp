import React from "react";
import { Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Import WhatsApp icon
import EmailIcon from "@mui/icons-material/Email";

function Socialicons() {
  const openGitHubProfile = () => {
    window.open("https://github.com/Rana5539", "_blank");
  };

  const openLinkedInProfile = () => {
    window.open("https://www.linkedin.com/in/waqar-akram-396b36208/", "_blank");
  };

  const openWhatsAppChat = () => {
    window.open("https://wa.me/03074613828", "_blank"); // Replace with your WhatsApp link
  };
  const openEmail = () => {
    window.open("mailto:wa852094@gmail.com", "_blank");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 3,
          "@media (max-width: 879px)": {
            mx: "auto",
          },
        }}
      >
        <a
          href="https://github.com/Rana5539"
          target="_blank"
          rel="noopener noreferrer"
          onClick={openGitHubProfile}
        >
          <GitHubIcon
            sx={{
              color: "white",
              fontSize: "37px",
              cursor: "pointer",
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/waqar-akram-396b36208/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={openLinkedInProfile}
        >
          <LinkedInIcon
            sx={{
              color: "dodgerblue",
              fontSize: "38px",
              cursor: "pointer",
            }}
          />
        </a>
        <a
          href="https://wa.me/03074613828"
          target="_blank"
          rel="noopener noreferrer"
          onClick={openWhatsAppChat}
        >
          <WhatsAppIcon
            sx={{
              color: "#25D366",
              fontSize: "38px",
              cursor: "pointer",
              filter: "drop-shadow(0 0 10px #25D366)",
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/waqar-akram-396b36208/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={openEmail}
        >
          <EmailIcon
            sx={{
              color: "whitesmoke",
              fontSize: "38px",
              cursor: "pointer",
            }}
          />
        </a>
      </Box>
    </>
  );
}

export default Socialicons;
