import { Box, styled } from '@mui/material';
import Slide from './Slide';


const Component = styled(Box)`
    display: flex;
`;

const LeftComponent = styled(Box)(({theme})=>({
    width: '81%',
    [theme.breakpoints.down('md')] : {
        width: '100%'
    }

}));


const RightComponent = styled(Box)(({theme})=>({
    marginTop: '20px',
    background : '#FFFFFF',
    width : '18%',
    marginLeft: '5px',
    padding: '2px 5px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')] : {
        display: 'none',
    }
}))
   


const SlideAd = ({ products,title,timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return (
        <Component>
            <LeftComponent>
                <Slide 
                    products={products} 
                    title={title}
                    timer={timer} 
                />
            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt='ad' style={{width: '210px'}} />
            </RightComponent>
        </Component>
    )
}

export default SlideAd;