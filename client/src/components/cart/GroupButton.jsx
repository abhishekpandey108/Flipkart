import {Button,ButtonGroup,styled} from '@mui/material';
import { useState } from 'react';
import { removeFromCart } from '../../redux/actions/cartAction';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';

const Container = styled(ButtonGroup)`
    margin-top: 25px;
`;

const RoundButton = styled(Button)`
    border-radius: 50%;
`;

const GroupButton = ({item}) =>{

    const {id} = item;
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(1);

    const minus = () => {
        setQuantity(quantity - 1);
        
        if(quantity===1){
            dispatch(removeFromCart(item.id));
        }else{
             dispatch(addToCart(id, quantity-1));
        }
    }    

    
    const addTooCart = () =>{
        setQuantity(quantity + 1);
        dispatch(addToCart(id, quantity+1));
      }

    return(
    <Container size="small">
        <RoundButton variant="contained" onClick={minus} >-</RoundButton>
        <Button variant="outlined" disable>{quantity}</Button>
        <RoundButton variant="contained" onClick={()=>addTooCart()}>+</RoundButton>
    </Container>
    )
}

export default GroupButton;