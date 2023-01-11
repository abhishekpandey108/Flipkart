import { useState , useEffect} from 'react';
import {Box , Typography,styled } from '@mui/material';


const Top = styled(Box)`
    padding: 13px 23px;
    background: #fff;
    border-bootom: 1px solid #f0f0f0;
`;


const Head = styled(Typography)`
    color: #878787;
    font-weight: bold;
`;


const Mid = styled(Box)`
    padding: 13px 23px;
    background: #fff;
    & > p{
       font-size: 14px;
       margin-bottom: 15px;
    }
   
    
`;

const Amount = styled(Box)`
    float: right;
   
`;




const Total = ({cartItems}) => {

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    
    const totalAmount = () =>{
        let price = 0 , discount = 0;
        cartItems.map(el=>{
           price += (el.mrp * el.quantity);
           discount += ((el.mrp * el.quantity) - (el.cost * el.quantity) );
           })

           setPrice(price);
           setDiscount(discount);
    }


    useEffect(() => {   
       totalAmount();
    },[cartItems,totalAmount]);    




  return (
    <Box>

        <Top>
            <Head>Price ({cartItems?.length} item)</Head>
        </Top>

        <Mid>
            <Typography>Price 
                <Amount component='span' >₹ {price}</Amount>
            </Typography>

            <Typography>Discount
                <Amount component='span' >- ₹ {discount}</Amount>
            </Typography>

            <Typography>Delivery Charge
                <Amount component='span' >₹ 60</Amount>
            </Typography>

            <Typography variant='h6' >Total
                <Amount component='span' >₹ {price-discount+60}</Amount>
            </Typography>
            <Typography style = {{fontSize:'12px',color:'green',marginTop:'10px',fontWeight:'500'}}>You'll save ₹ {discount} on this order</Typography>
        </Mid>

    </Box>    
  )
}

export default Total
