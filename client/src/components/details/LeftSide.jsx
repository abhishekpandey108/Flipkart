import {useState} from 'react';
import {Box,Button,styled} from '@mui/material';
import { ShoppingCart , FlashOn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import { addCart } from '../../service/api';

const Left = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')]: {
      padding: '20px 40px',
     
  }
}))

const Image = styled('img')({
  width:'95%',
  padding: '15px'
});

const Buttons = styled(Button)(({ theme })=>({
  width: '48%',
  borderRadius: '2px',
  height: '50px',
  color: '#FFF',
  fontSize: '12px',
  
  [theme.breakpoints.down('lg')]: {
    width: '46%',
    fontSize: '10px'
  },

  [theme.breakpoints.down('sm')]: {
    width: '48%',
    fontSize: '14px'
  }

}));
 


const LeftSide = ({product}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = product;
  const [quantity, setQuantity] = useState(1); 

  // const addTooCart = () => {
  //   dispatch(addToCart(id, quantity));
  //   navigate('/cart');
  // }
 

  const addTooCart = (id) =>{
    let userId = JSON.parse(localStorage.getItem('User_Id'));

    console.log(userId);

    let data ={};
    data.user_id = userId;
    data.product_id = id;
    data.url = product.url;
    data.title = product.title.longTitle;
    data.cost = product.price.cost;
    data.mrp = product.price.mrp;
    data.discount = product.price.discount;
    data.quantity = product.quantity;
    


    addCart(data);
    navigate('/cart');
  }

console.log(product.id);

  return (
    <Left>
      <Box style={{ padding: '15px 20px',border: '1px solid #f0f0f0' }}  >
        <Image src={product.detailUrl} alt="product" /><br />
      </Box>
      <Buttons style = {{marginRight: 10, background: '#ff9f00'}}  variant="contained" onClick={()=>addTooCart(product.id)} ><ShoppingCart />Add to Cart</Buttons>
      <Buttons style = {{background: '#fb641b'}} variant="contained" ><FlashOn /> Buy Now</Buttons>
    </Left>
)
  
}

export default LeftSide;