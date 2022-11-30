import { Box, Typography, Table, TableBody, TableRow, TableCell, styled } from '@mui/material';
import { LocalOffer } from '@mui/icons-material';

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border:none;
    }
`

const Badge = styled(LocalOffer)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`;




const RightSide = ({product}) => {

    const assure = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const superCoin = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
                <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                    <span><img src={assure} alt="assure" style={{width: 77, marginLeft: 20}} /></span>
                </Typography>
                <Typography>
                        <span style={{ fontSize: 28 , marginRight:'5px'}}>₹{product.price.cost}</span>
                        <span style={{ color: '#878787' , marginRight:'5px' }}><strike>₹{product.price.mrp}</strike></span>
                        <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                </Typography>


            <Typography>Available offers</Typography>
            <SmallText>
                <Typography><Badge />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                <Typography><Badge />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                <Typography><Badge />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                <Typography><Badge />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </ColumnText>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={superCoin} style={{ width: 390 }}  alt='SuperCoin' />
                        </TableCell>
                    </TableRow>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )


}

export default RightSide