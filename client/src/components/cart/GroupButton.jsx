import {Button,ButtonGroup,styled} from '@mui/material';
//import { useState } from 'react';
//import { removeFromCart } from '../../redux/actions/cartAction';
//import { useDispatch } from 'react-redux';
//import { addToCart } from '../../redux/actions/cartAction';
import { incCart,decCart } from '../../service/api';

const Container = styled(ButtonGroup)`
    margin-top: 25px;
`;

const RoundButton = styled(Button)`
    border-radius: 50%;
`;

const GroupButton = ({item}) =>{

    const minus = () => {
       decCart(item);
    }    

    
    const addTooCart = () =>{
        incCart(item);
      }
      
    return(
    <Container size="small">
        <RoundButton variant="contained" onClick={minus} >-</RoundButton>
        <Button variant="outlined" disable>{item.quantity}</Button>
        <RoundButton variant="contained" onClick={()=>addTooCart()}>+</RoundButton>
    </Container>
    )
}

export default GroupButton;