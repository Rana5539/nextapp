import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link';
import React from 'react'

function Navbar() {
  
  const arr = [
    { href: '/', text: 'Home' },
    { href: '/About', text: 'About' },
    { href: '/Project', text: 'Projects' },
  ];

  return (
    <>
      <Box sx={{
        mt:8,
        width: '90%',
        margin: 'auto',
        height: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        '@media (max-width: 800px)': {
          display: 'none', 
        },
      }}>
        <Link href='/' style={{textDecoration:'none'}}> 
        <Image src='/logo.png' width={80} height={80} alt={'logo'}></Image>
        </Link>
       
        <Box sx={{
          pr:4,
          pt:1.7,
          pl:4,
          pb:1.7,
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          width: '25%',
          justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex'
        }}>
          {arr.map((data, index) => (
            <Typography key={index} sx={{ color: 'white', fontFamily:'Poppins',fontWeight:'300' }}>
              <a href={data.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                {data.text}
              </a>
            </Typography>
            ))}
           
        </Box>
        <Link href='/Contact'>
          
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
      Contact
    </Button>
    </Link>
      </Box>
    </>
  )
}

export default Navbar
