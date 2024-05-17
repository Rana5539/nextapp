'use client'
import { Box, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';

function ContactForm() {
  return (
    <>
     <Box sx={{position: 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65vh',
  height: '70vh',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',
  textAlign:'center',
  alignItems:'center',
  justifyContent:'center',
  }}>
    <Typography sx={{mt:2, color:'#87CEEB', fontSize:'30px', fontFamily:'Poppins', }}>  Contact Us</Typography>
    <TextField  type='text' placeholder='Name' id="fullWidth"  sx={{mt:4, width:'90%',borderRadius: '65px', border:'1px solid #87CEEB','& input::placeholder': {
      color: 'white', 
      fontFamily: 'Poppins',
      fontSize:'17px',
       
          },}}
          InputProps={{
            style: {
              borderRadius: '65px', 
              borderColor:'#87CEEB'
            },}}/>
    <TextField  type='email' placeholder='Email' id="fullWidth"  sx={{mt:4, width:'90%',borderRadius: '65px', border:'1px solid #87CEEB','& input::placeholder': {
      color: 'white', 
      fontFamily: 'Poppins',
      fontSize:'17px'
    },}}
    InputProps={{
      style: {
        borderRadius: '65px', 
        borderColor:'#87CEEB'
      },}}/>
    <TextField
  type='text'
  placeholder='Message'
  id="fullWidth"
  multiline
  rows={5}
  sx={{
    mt: 4,
    width: '90%',
    border: '1px solid #87CEEB',
    '& input::placeholder': {
      color: 'white',
      fontFamily: 'Poppins',
      fontSize: '17px'
    },
  }}
/>

    </Box> 
    </>
  )
}

export default ContactForm
