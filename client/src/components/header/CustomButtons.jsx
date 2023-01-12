import React from 'react';
import { useContext } from 'react';
import { CartContext, DataContext } from '../../context/DataProvider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
import {Box,Button,Typography,Badge,styled} from '@mui/material';
import {useSelector} from 'react-redux';



// Login for click
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';

const Wrapper = styled(Box)(({ theme })=>({
    margin: '0 3% 0 auto',
    display: 'flex',
    alignItems:'center',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: 'inherit',
        fontSize: 14,
        cursor: 'pointer',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('md')]: {
        display: 'block',
        '& > p , & > div': {
            
            color: 'black',
            marginTop: 10,
            
        }    

    }
}));
   


const CartContainer = styled(Link)(({ theme })=>({
    display: 'flex',
    fontSize : '10px',
    textDecoration : 'none',
    
    [theme.breakpoints.down('sm')]:{
        display: 'block'
    }    
}))
    


const LoginButton = styled(Button)`
color: '#2874f0',
background: '#FFFFFF',
textTransform: 'none',
fontWeight: 600,
borderRadius: 2,
padding: '5px 40px',
height: 32,
boxShadow: 'none',
[theme.breakpoints.down('sm')]: {
    background: '#2874f0',
    color: '#FFFFFF'
}
`;

const CustomButton = () =>{

    const [open,setOpen] = React.useState(false);
    const openDialog = () => {
        setOpen(true);
    }    

    const {accountName,setAccountName} = useContext(DataContext);
     
    const {cartLength} = useContext(CartContext);

   // const {cartItems} = useSelector(state => state.cart);


    return(
        <Wrapper>
            {
                accountName ? <Profile accountName={accountName} setAccountName={setAccountName} /> : 
                <LoginButton variant="contained" onClick={openDialog}>Login</LoginButton>
            }
            
            <Typography style={{width:'120px'}}>Become a Seller</Typography>
            <Typography>More</Typography>
            
            <CartContainer to='/cart'>
                <Badge badgeContent={cartLength} color='warning' >
                <ShoppingCartIcon style={{fontSize:'20px'}}/>
                  </Badge>
                <Typography style={{fontSize:'14px',marginLeft:'5px'}}>Cart</Typography>
            </CartContainer>
            
            

            <LoginDialog open = {open} setOpen={setOpen} />
        </Wrapper>

    )
}
export default CustomButton;