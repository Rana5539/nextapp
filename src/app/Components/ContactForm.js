import { Box } from '@mui/material'
import React from 'react'

function ContactForm() {
  return (
    <>
     <Box sx={{position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65vh',
  height: '70vh',
  backgroundColor: 'rgba(255, 255, 255, 0.25)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  }}></Box> 
    </>
  )
}

export default ContactForm
