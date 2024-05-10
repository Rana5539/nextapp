'use client'
import Socialicons from './Socialicons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {Typography, Box, Button} from '@mui/material';

function page() {
 
  return (
    <>
    
    <Box sx={{display:'flex', flexDirection:'column', width:'65vh','@media (max-width: 521px)': {
  width:'auto'// Adjusted width for screens wider than 1200px
},}}>
    <Typography sx={{ fontFamily:'Lobster', fontSize:'50px', color:'#09b4fe',fontWeight:'400'}}>Hi!</Typography>
    <Typography sx={{fontFamily:'Lugrasimo', fontSize:'50px', color:'#09b4fe', lineHeight: 0.7}}>I am</Typography>
    <Typography sx={{fontFamily:'Lugrasimo', fontSize:'50px', color:'#09b4fe'}}>Waqar Akram</Typography>
    <Typography sx={{fontFamily:'Poppins', fontSize:'40px', color:'#87CEEB', fontWeight:'200'}}>Full Stack Developer</Typography>
<Typography sx={{color:'gray',fontFamily:'Signika', fontSize:'14px',fontWeight:'200',fontStyle: 'italic'}}>As a full stack developer, I excel in both frontend and backend development, ensuring that every aspect of the web application is crafted with precision and efficiency. I specialize in MERN stack development, creating dynamic and responsive web applications with seamless integration between frontend and backend components.</Typography>
<Box sx={{display:'flex', mt:2, gap:4,
'@media (max-width: 879px)': {
  flexDirection:'column', 
   alignItems:'center'// Adjusted width for screens wider than 1200px
},}}>
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

  <Socialicons/>
    
</Box>
    </>
  )
}

export default page
