import { useState } from 'react';
import {AppBar,styled,Toolbar,Typography, IconButton, Drawer, List, ListItem, Box} from '@mui/material';
import { Menu } from '@mui/icons-material';
import Search from './Search';
import CustomButton from './CustomButtons';
import {Link} from 'react-router-dom';


const styleHeader = {
    background : "#2874f0",
    height : "55px"
}
const Component = styled(Link)(({ theme })=>({
    marginLeft : '12%',
    textDecoration : 'none',
    color : 'inherit'


}));
    

    
    
const subHeading = {
    fontSize : '10px',
    lineHeight : 0
}

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));


const ButtonContainer = styled('span')(({ theme }) => ({ 
    margin: '0 4% 0 auto', 
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));


const Image = styled('img')(({ theme })=> ({ 
    width:'10px',
    marginLeft:'4px',

    [theme.breakpoints.down('md')]: {
        width: 'auto',
        height: '10px',
    },

    [theme.breakpoints.down('sm')]: {
        width: 'auto',
        height: '7px',
    }
}));


const ImageBig = styled('img')(({ theme })=> ({ 
    width:'75px',
    
    [theme.breakpoints.down('md')]: {
        width: '60px',   
    },

    [theme.breakpoints.down('sm')]: {
        width: '50px',   
    }

}))




 const Header=()=> {
 
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }


    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <ListItem button  divider>
                    <CustomButton />
                </ListItem>
            </List>
        </Box>
    );



    return (
    <AppBar style={styleHeader}>
        <Toolbar style={{minHeight:'55px'}}>

            <MenuButton onClick={handleOpen} style={{color:'inherit'}} >
                <Menu  />
            </MenuButton>

            <Drawer open={open} onClose={handleClose} >
                {list()}
            </Drawer>


             <Component to ='/'> 
                <ImageBig src={logoURL} alt='logo'  />
                <Box>
                    <Typography style={subHeading}>Explore&nbsp;
                      <Box component='span' style={{color:'#FFE500'}}>Plus</Box>
                      <Image src={subURL} alt='smallLogo'  />
                    </Typography>
                </Box>
            </Component>


            <Search />

            <ButtonContainer>
                <CustomButton />
            </ButtonContainer>

        </Toolbar>
    </AppBar>
        
    )
}    

export default Header;