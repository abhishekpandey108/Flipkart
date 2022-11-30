import React from 'react'
import {Box,styled, Typography} from '@mui/material';
import { navData } from '../../constants/data';

const Component = styled(Box)(({theme}) => ({
    display : 'flex',
    background : "#fff",
    margin:'0 130px 0 130px',
    justifyContent : 'space-between',
    overflow : 'overlay',
    '::-webkit-scrollbar' : {
            display: 'none'
        },
    [theme.breakpoints.down('lg')]: {
        margin: 0,
    }    
}));
   




const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`;

const Text = styled(Typography)`
    font-size : 14px;
    font-family : inherit;
    font-weight : bold;
    

    
`;

const Navbar = () => {
  return (
    <Box style={{background:'#fff'}}>
        <Component >
            {
            navData.map(el => (
                
                    <Container>
                         <img src={el.url} alt='pic' style={{width:'64px'}} />
                         <Text>{el.text}</Text>
                    </Container>
                 
            ))
            }
        </Component>
    </Box>
  )
}

export default Navbar