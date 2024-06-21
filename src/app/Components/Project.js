'use client'
import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Grid, Box } from '@mui/material';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import Link from 'next/link';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
export default function MultiActionAreaCard() {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const reactPort = () => {
        window.open("https://portfolio-bay-nu-80.vercel.app/", "_blank");
      };
      const Realestate  = () => {
        window.open('https://build2-nu.vercel.app/', '_blank');
      }
  return (
    <>
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="80vh"
     
    >
      <Grid container spacing={10} justifyContent="center">
        <Grid item>
          <Card sx={{ maxWidth: 345 , borderRadius:'20px', bgcolor:'rgba(255, 255, 255, 0)', border:'1px dashed dodgerblue'}}>
            <CardActionArea>
              <div style={{ position: 'relative', width: '100%', height: 180 }}>
                <Image
                  src={'/p1.png'}
                  alt="green iguana"
                  layout="fill"
                  objectFit="cover"
                  
                  
                />
              </div>
              <CardContent>
                <Typography  component="div" sx={{color:'dodgerblue', fontWeight:500, fontFamily:'Poppins', fontSize:'18px'}}>
                  Portfolio in React
                </Typography>
                <Typography  sx={{color:'white', fontFamily:'Inria Sans', fontWeight:'200'}}>
                  Developed my own portfolio using react js where i used css libraries like material UI and AOS for different animations to make it more dynamic and innovative.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link onClick={reactPort} href={''}> <LaunchRoundedIcon sx={{color:'dodgerblue', fontSize:'30px', cursor:'pointer'}}/></Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
        <Card sx={{ maxWidth: 345 , borderRadius:'20px', bgcolor:'rgba(255, 255, 255, 0)', border:'1px dashed dodgerblue'}}>
            <CardActionArea>
              <div style={{ position: 'relative', width: '100%', height: 180 }}>
                <Image
                  src={'/p2.png'}
                  alt="green iguana"
                  layout="fill"
                  objectFit="cover"
                  
                  
                />
              </div>
              <CardContent>
                <Typography  component="div" sx={{color:'dodgerblue', fontWeight:500, fontFamily:'Poppins', fontSize:'18px'}}>
                  Real Estate Web App
                </Typography>
                <Typography  sx={{color:'white', fontFamily:'Inria Sans', fontWeight:'200'}}>
                  Real Estate , developed using react, hubspot is used for online realtime chat and webs3 forms are integrated for contact, where customers can sale and purchase houses.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link onClick={Realestate} href={''}> <LaunchRoundedIcon sx={{color:'dodgerblue', fontSize:'30px', cursor:'pointer'}}/></Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
        <Card sx={{ maxWidth: 345 , borderRadius:'20px', bgcolor:'rgba(255, 255, 255, 0)', border:'1px dashed dodgerblue'}}>
            <CardActionArea>
              <div style={{ position: 'relative', width: '100%', height: 180 }}>
                <Image
                  src={'/p3.png'}
                  alt="green iguana"
                  layout="fill"
                  objectFit="cover"
                  
                  
                />
              </div>
              <CardContent>
                <Typography  component="div" sx={{color:'dodgerblue', fontWeight:500, fontFamily:'Poppins', fontSize:'18px'}}>
                  Porfolio in Next js
                </Typography>
                <Typography  sx={{color:'white', fontFamily:'Inria Sans', fontWeight:'200'}}>
                  Recently developed another portfolio using Next js with MUI library for css and AOS for animations. Modern and aye catchy then the 1st one.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
             <Link href={''}  onClick={handleClickOpen}><LaunchRoundedIcon sx={{color:'dodgerblue', fontSize:'30px', cursor:'pointer'}}/></Link>  
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      
    </Box>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
       sx={{borderRadius:'40px'}}>
        <DialogTitle id="alert-dialog-title" sx={{color:'dodgerblue', textAlign:'center', fontFamily:'Poppins'}}>
          {"Portfolio in Next js"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{fontFamily:'Inria Sans'}}>
           This project is currently you are observing
          </DialogContentText>
        </DialogContent>
       
      </Dialog>
    </>
  );
}
