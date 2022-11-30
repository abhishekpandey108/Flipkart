import {  useEffect } from 'react';

import { styled, Box, Grid } from '@mui/material';

import RightSide from './RightSide';
import LeftSide from './LeftSide';
import { useParams } from 'react-router-dom';
//import { getProductById } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';

import { getProductsDetails } from '../../redux/actions/productsAction';

const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
    
   
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: '0px'
    }
}))

const RightContainer = styled(Grid)`

    margin-top: 50px;
    padding-left: 10px;
    & > p {
        margin-top: 10px;
    }
`;

const DetailView = () => {
    
    
    const {id} = useParams();

    const { loading, product } = useSelector(state => state.getProductsDetails);

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(product && id !== product.id)   
            dispatch(getProductsDetails(id));
    }, [dispatch, product, id, loading]);

    return (
        <Component>
            <Box></Box>
            { product && Object.keys(product).length &&
                <Container container> 

                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <LeftSide product={product} />
                    </Grid>

                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        
                        <RightSide product={product} /> 

                    </RightContainer>

                </Container>
            }   
        </Component>
    )
}

export default DetailView;