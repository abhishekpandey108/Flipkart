import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import Countdown from 'react-countdown';

import { Box, Typography, Button, Divider, styled } from '@mui/material';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };



  const renderer = ({ hours, minutes, seconds}) => {
      return <Box variant='span'>{hours}:{minutes}:{seconds} Left</Box>;
  };


  
 const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

  const Component = styled(Box)`
    margin-top: 20px;
    background : #fff;
  `;

  const Deal = styled(Box)`
    padding: 15px 20px;
    display : flex;
    align-items : center;
  `;

  const Text =styled(Typography)`
    font-size:13px;
    margin-top:4px;
  `;


const Slide = ({products,title,timer}) => {
  return (
    <Component>
        <Deal> 
            <Typography style={{fontWeight:'bold'}} >{title}</Typography> 
            { 
                timer && 
                <>
                    <img src={timerURL} alt='timer' style={{marginLeft:'20px', width:'25px'}}/>
                    <Countdown renderer={renderer} date={Date.now() + 5.04e7} />
                </>
            }
            <Button variant='contained' style={{marginLeft:'auto',fontSize:'13px',fontWeight:'600',borderRadius:'2px', background:'#2874f0'}}>View all</Button>
        </Deal>
        <Divider/>
        
            <Carousel 
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={false}
                centerMode={true}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    products.map(product => (
                      <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                        <Box style={{padding:'25px 15px',textAlign:'center'}}>
                            <img src={product.url} alt={product.title} style={{width:'auto',height:'150px'}} />
                            <Text style={{fontWeight:'600',color:'#212121'}} >{product.title.shortTitle}</Text>
                            <Text style={{color:'green'}} >{product.discount}</Text>
                            <Text style={{opacity:'.6',color:'#212121'}}>{product.tagline}</Text>
                        </Box>
                      </Link>  
                    ))
                }

            </Carousel>
    </Component>
  )
}

export default Slide
