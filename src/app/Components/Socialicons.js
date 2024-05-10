import React from 'react'
import {Box} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Socialicons() {
    const openGitHubProfile = () => {
        window.open('https://github.com/Rana5539', '_blank');
      };
      const LinkedIn = () => {
        window.open('https://www.linkedin.com/in/waqar-akram-396b36208/', '_blank');
      };
  return (
    <>
        <Box sx={{display:'flex', gap:3,mt:3,'@media (max-width: 879px)': {
    mx:'auto'// Adjusted width for screens wider than 1200px
},}}>
      <a href="https://github.com/Rana5539" target="_blank" rel="noopener noreferrer" onClick={openGitHubProfile}>
<GitHubIcon sx={{color:'#87CEEB', fontSize:'37px',cursor:'pointer', 
filter: 'drop-shadow(0 0 10px #10a9fc)',
cursor: 'pointer',}}/></a>
<FacebookRoundedIcon  sx={{color:'#87CEEB', fontSize:'38px',cursor:'pointer', 
filter: 'drop-shadow(0 0 10px #10a9fc)',
cursor: 'pointer',}}/>
<a href="https://www.linkedin.com/in/waqar-akram-396b36208/" target="_blank" rel="noopener noreferrer" onClick={LinkedIn}><LinkedInIcon  sx={{color:'#87CEEB', fontSize:'38px',cursor:'pointer', 
filter: 'drop-shadow(0 0 10px #10a9fc)',
cursor: 'pointer',}}/></a>
</Box>
    </>
  )
}

export default Socialicons
