'use client'
import React from 'react'
import Cube from './Cube'
import { Box, Typography} from '@mui/material'
import Title from './Title'
function page() {
  return (
    <>
   <Box sx={{
  display: 'flex',
  justifyContent: 'space-between',
  width: '90%', // Default width
  mx: 'auto',
  mt: 8,
  '@media (min-width: 1200px)': {
    width: '70%', // Adjusted width for screens wider than 1200px
  },
  '@media (max-width: 879px)': {
    flexDirection:'column', 
    textAlign:'center',
    alignItems:'center'// Adjusted width for screens wider than 1200px
  },
}}>
  <Title />
  <Cube />
</Box>


      </>
  )
}

export default page
