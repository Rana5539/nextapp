import React from 'react'
import Cube from './Cube'
import { Box, Typography} from '@mui/material'
import Title from './Title'
function page() {
  return (
    <>
    <Box sx={{display:'flex', justifyContent:'space-between', width:'70%', mx:'auto', mt:8}}>
    <Title/>
      <Cube/>
      </Box>
      </>
  )
}

export default page
