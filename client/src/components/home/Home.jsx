

import React, {useEffect} from 'react'
import {Box, styled} from '@mui/material';
import Navbar from './Navbar';
import Banner from './Banner';
import Slide from './Slide';
import SlideAd from './SlideAd';
import MidBanner from './MidBanner';

import {getProducts} from '../../redux/actions/productsAction';
import { useDispatch , useSelector } from 'react-redux';

const Component = styled(Box)`
  padding: 10px;
  background-color: #F2F2F2;
`;

const Home = () => {



  const {products} = useSelector(state => state.getProducts);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getProducts() );
  }, [dispatch]);



  return (
    <>
      <Navbar />
      <Component>
         <Banner />
         <SlideAd products={products} title='Deal of the Day' timer={true} />
         <Slide products={products} title='Discounts for You' timer={false} />
         <Slide products={products} title='Suggested Items' timer={false} />
         <MidBanner />
         <Slide products={products} title='Top Selections' timer={false} />
         <Slide products={products} title='Recommended Items' timer={false} />
         <Slide products={products} title='Trending Offers' timer={true} />
         <Slide products={products} title='Top Deals on Accessories' timer={true} />
      </Component>   
    </> 
  )
}

export default Home;