import React from 'react';
import { useState } from 'react';
import { Typography, Box, Menu, MenuItem, styled } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    
`;



const Profile = ({accountName,setAccountName}) => {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logOut = () => {
        setAccountName('');
    }    

  return (
    <>
      <Box onClick={handleClick} style={{cursor:'pointer'}}><Typography>{accountName}</Typography>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose() ; logOut()}}>
            <PowerSettingsNewIcon color = "primary"  fontSize = 'small'/> 
            <Typography style={{fontSize:'12px', marginLeft:'4px'}}>Log out</Typography>
        </MenuItem>
      </Menu>

      </Box>
    </>
  )
}

export default Profile
