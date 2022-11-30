import React from 'react';
import { Grid , styled } from '@mui/material';
import { midBanners } from '../../constants/data';

const Image = styled('img')(({theme})=>({
    marginTop: '10px',
    width: '100%',
    
    [theme.breakpoints.down('md')]: {
       objectFit : 'cover',
       height: '120px'
    }    
}))


const MidBanner = () => {
  return (
    <>
        <Grid lg={12} md={12} sm={12} xs={12} container   style={{marginTop:'10px'}} >
            {
                midBanners.map(ban=>(
                    <Grid item lg={4} md={4} sm={12} xs={12} >
                        <img src={ban.url} alt='Banner' style={{width:'100%'}} />
                    </Grid>    
                ))
            }
        </Grid>

        <Image src='https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50' alt='Lower Banner'  />
    </>
  )
}

export default MidBanner