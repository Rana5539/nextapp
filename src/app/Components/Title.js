import React from 'react'
import {Typography, Box} from '@mui/material';
function page() {
  return (
    <>
    <Box sx={{display:'flex', flexDirection:'column',}}>
    <Typography sx={{color:'white', fontFamily:'Lobster', fontSize:'50px', color:'#09b4fe',fontWeight:'400'}}>Hi!</Typography>
    <Typography sx={{color:'white',fontFamily:'Lugrasimo', fontSize:'50px', color:'#09b4fe', lineHeight: 0.7}}>I am</Typography>
    <Typography sx={{color:'white',fontFamily:'Lugrasimo', fontSize:'50px', color:'#09b4fe'}}>Waqar Akram</Typography>
      <div class="typewriter">
  <h1>Full stack developer</h1>
</div></Box>
    </>
  )
}

export default page
