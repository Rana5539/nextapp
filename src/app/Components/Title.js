'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {Typography, Box, Button} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function page() {
  const openGitHubProfile = () => {
    window.open('https://github.com/Rana5539', '_blank');
  };
  const LinkedIn = () => {
    window.open('https://www.linkedin.com/in/waqar-akram-396b36208/', '_blank');
  };
  return (
    <>
    
    <Box sx={{display:'flex', flexDirection:'column',}}>
    <Typography sx={{ fontFamily:'Lobster', fontSize:'50px', color:'#09b4fe',fontWeight:'400'}}>Hi!</Typography>
    <Typography sx={{fontFamily:'Lugrasimo', fontSize:'50px', color:'#09b4fe', lineHeight: 0.7}}>I am</Typography>
    <Typography sx={{fontFamily:'Lugrasimo', fontSize:'50px', color:'#09b4fe'}}>Waqar Akram</Typography>
    <Typography sx={{fontFamily:'Poppins', fontSize:'40px', color:'#87CEEB', fontWeight:'200'}}>Full Stack Developer</Typography>
<Typography sx={{color:'gray',fontFamily:'Signika', fontSize:'14px',fontWeight:'200',fontStyle: 'italic'}}>As a full stack developer, I excel in both frontend and backend development,<br/> ensuring that every aspect of the web application is crafted with precision<br/> and efficiency. I specialize in MERN stack development, creating dynamic<br/> and responsive web applications with seamless integration between frontend<br/> and backend components.</Typography>
<Box sx={{display:'flex', mt:2, gap:4}}>
<Link href='/Contact'> 
<Button
      variant='contained'
      sx={{
        color: 'white',
        textTransform: 'none',
        fontFamily: 'Poppins',
        fontWeight: '300',
        borderColor: '#09b4fe',
       
      }}
    >
      Get in touch
    </Button></Link>
<Button
      variant='outlined'
      sx={{
        color: 'white',
        textTransform: 'none',
        fontFamily: 'Poppins',
        fontWeight: '300',
        borderColor: '#87CEEB', // Sky blue color
        animation: 'glowBorder 1.5s linear infinite', 
        '@keyframes glowBorder': { 
          '0%': {
            borderColor: '#10a9fc',
            boxShadow: '0 0 10px #87CEEB',
          },
          '50%': {
            borderColor: '#00BFFF',
            boxShadow: '0 0 15px #87CEEB', 
          },
          '100%': {
            borderColor: '#10a9fc',
            boxShadow: '0 0 10px #87CEEB',
          },
        },
      }}
    >
      Resume
    </Button>
    
</Box>
<Box sx={{display:'flex', gap:3,mt:3}}>
  <a href="https://github.com/Rana5539" target="_blank" rel="noopener noreferrer" onClick={openGitHubProfile}>
<GitHubIcon sx={{color:'#87CEEB', fontSize:'37px',cursor:'pointer', 
filter: 'drop-shadow(0 0 10px #10a9fc)',
cursor: 'pointer',}}/></a>
<a href="https://www.linkedin.com/in/waqar-akram-396b36208/" target="_blank" rel="noopener noreferrer" onClick={LinkedIn}><FacebookRoundedIcon  sx={{color:'#87CEEB', fontSize:'38px',cursor:'pointer', 
filter: 'drop-shadow(0 0 10px #10a9fc)',
cursor: 'pointer',}}/></a>
<LinkedInIcon  sx={{color:'#87CEEB', fontSize:'38px',cursor:'pointer', 
filter: 'drop-shadow(0 0 10px #10a9fc)',
cursor: 'pointer',}}/>
    </Box>
</Box>
    </>
  )
}

export default page
