import React,{useEffect,useState,useContext} from 'react';
import {Box, Grid,Typography, Button,  styled} from '@mui/material';

// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/actions/cartAction';
import { getCart } from '../../service/api';
import Total from './Total';
import CartItem from './CartItem';
import CartEmpty from './CartEmpty';
import { CartContext } from '../../context/DataProvider';

const Component = styled(Grid)(({ theme }) => ({
    padding: '30px 120px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        padding: '15px 0'
    }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
        marginBottom: 15
    }
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;



const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;




const Cart = () => {

    let {handleCartLen} = useContext(CartContext);

    const [cartItems,setCartItems] = useState([]);
    
    useEffect(() => {
        
        let userId = JSON.parse(localStorage.getItem('User_Id'));
        (async ()=> {
            console.log("Cart.jsx: 68");
            let data = await getCart(userId);
            console.log("data",data.data);
            setCartItems([...data.data]);
        })();
       
        
    }, [cartItems.length]);
    handleCartLen(cartItems.length);
    console.log("cartItem legth: line 73",cartItems.length)
    console.log("line 74: ",cartItems);
    let {cartLength} = useContext(CartContext)
    console.log("Cart.jsx line 76 :",cartLength);

  return (
    <>
      { cartItems.length ? 
            <Component container>
                <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                    <Header>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</Typography>
                    </Header>
                        {   cartItems.map(item => (
                                <CartItem item={item} />
                            ))
                        }
                    <BottomWrapper>
                        <StyledButton color='success'  variant="contained">Place Order</StyledButton>
                    </BottomWrapper>
                </LeftComponent>

                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Total cartItems={cartItems} /> 
                </Grid>

            </Component> : <CartEmpty />
        }

    </>
  )
}

export default Cart;
