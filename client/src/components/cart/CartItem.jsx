import { useContext } from 'react';
import { Card, Box, Typography, Button, styled } from '@mui/material';
import { addEllipsis } from '../../constants/elipsis';
import GroupButton from './GroupButton';
import { removeFromCart } from '../../service/api';
import { PageContext } from '../../context/DataProvider';
//import { removeFromCart } from '../../redux/actions/cartAction';
//import { useDispatch } from 'react-redux';

const Component = styled(Card)`
    border-top: 1px solid #f0f0f0;
    border-radius: 0px;
    display: flex;
`;

const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 14px;
    font-weight: 500;
    color: red;
`;

const CartItem = ({ item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    let {page,handlePage} = useContext(PageContext);

    const removeToCart = (data) => {
        removeFromCart(data);
        handlePage(page);
    }




    return (
        <Component>
            <LeftComponent>
                <img src={item.url} style={{ height: 110, width: 110 }} alt='cartproduct' />
                <GroupButton item = {item} />
            </LeftComponent>

            <Box style={{ margin: 20 }}>
                <Typography>{addEllipsis(item.title)}</Typography>
                <SmallText>Seller:RetailNet
                    <span><img src={fassured} style={{ width: 50, marginLeft: 10 }} alt='fassure' /></span>
                </SmallText>
                <Typography style={{margin: '20px 0'}}>
                    <Cost component="span">₹{item.cost * item.quantity}</Cost>&nbsp;&nbsp;&nbsp;
                    <MRP component="span"><strike>₹{item.mrp * item.quantity}</strike></MRP>&nbsp;&nbsp;&nbsp;
                    <Discount component="span">{item.discount} off</Discount>
                </Typography>
                <Remove variant="outlined" onClick={()=>removeToCart(item)}>Remove</Remove>
            </Box>
        </Component>
    )
}

export default CartItem;