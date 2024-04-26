import { Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@mui/material/Button';
export default function NotFound() {
  return (
    <>
    <div style={{marginTop:'30px'}}>
      <Image src='/not found.png' width={350} height={350} alt='image' className='notfound'></Image>
    </div>
    <Typography sx={{textAlign:'center', color:'white', fontSize:'110px', fontFamily:'Lugrasimo' }}>404</Typography>
    <Typography sx={{textAlign:'center', color:'white', fontSize:'18px', fontFamily:'Poppins',  }}>The page you are looking for doesn't exist or another error occured <br/>
    <Link href='/'>
    <Button
      variant='outlined'
      sx={{
        fontSize:'16px',
        mt:2,
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
      Return
    </Button>
    </Link>
    </Typography>
   
    
    </>
    
  )
}