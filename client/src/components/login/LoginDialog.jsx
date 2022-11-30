import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import  {authenticateLogin,authenticateSignup}  from '../../service/api';

import {Dialog,Box,TextField, Typography, Button, styled} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

const Component = styled(Box)`
    height : 70vh;
    width : 90vh;
    padding : 0;
`;


const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: auto;
    width:20%;
    padding: 45px 45px;
    & > p , & > h5{
        color:#fff;
        font-weight:500;
    };
    & > p{
        font-size:14px;
    };
`;


const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    };
    ::-webkit-scrollbar {
        display: none;
    }
`;

const WrapperSignup = styled(Box)`
    padding: 2px 35px;
    display: flex;
    flex: 1;
    text-size:14px;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 10px;
    };
    ::-webkit-scrollbar {
        display: none;
    }
`;


const LoginButton = styled(Button)`
    text-transform : none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;


const RequestOTP = styled(Button)`
    text-transform : none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)
`;


const Text = styled(Typography)`
    font-size: 12px;
    color : #878787;
`;


const CreateAccount = styled(Typography)`
    font-size: 14px;
    font-weight: bold;
    color : #2874f0;
    text-align: center;
    cursor: pointer;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color : red;
    display:flex;
    align-items:center;

`;


const accountInitialValue = {
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
      view:'signup',
      heading: "Looks like you're new here",
      subHeading:'Signup with your mobile number to get started' 
    }    
}


const signupInitialValues = {
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    number:''
};


const loginInitialValues = {
    username:'',
    password:''
};    





const LoginDialog = ({open,setOpen}) => {


    const [account, setAccount] = React.useState(accountInitialValue.login);
    const [signup, setSignup] = React.useState(signupInitialValues);
    const [login, setLogin] = React.useState(loginInitialValues);
    const [error,setError] = React.useState(false);
    const {setAccountName} = useContext(DataContext);


    const handleClose = () => {
        setOpen(false);
        setAccount(accountInitialValue.login);
        setError(false);
    };

    const toggleSignup = () => {
        setAccount(accountInitialValue.signup);
    }  
    
    const toggleLogin = () => {
        setAccount(accountInitialValue.login);
    }  


    const onInputChange=(e)=>{
        setSignup({...signup, [e.target.name]:e.target.value });
    }


    const signupUser = async() =>{
        console.log('signup:  ',signup);
        let res = await authenticateSignup(signup);
        console.log(res);
        setAccountName(signup.firstname);
    }


    const onValueChange=(e)=>{
        setLogin({...login, [e.target.name]:e.target.value });
        console.log(login);
    }


    const loginUser = async() =>{
        let res = await authenticateLogin(login);
        console.log("Line 181: ",res);

        if (res.status===200){
            handleClose();
            setAccountName(res.data.data.firstname);
            localStorage.setItem("User_Id",JSON.stringify(res.data.data.number));
        }else{
            setError(true);
        }
    }    


  return (
    <>
      <Dialog open={open} onClose={handleClose} >
        <Component>
            <Box style={{display:'flex',height:'100%'}}>

                <Image>
                    <Typography variant='h5'>{account.heading}</Typography>
                    <Typography style={{marginTop:'20px'}}>{account.subHeading}</Typography>
                </Image>                                                            

                {
                    account.view === 'login' ?
                <Wrapper>                                                                    
                    <TextField variant='standard' label='Enter Email/Mobile number' name = 'firstname'   onChange={(e)=>onValueChange(e)}  />
                    {error  && 
                        
                            
                            <Error><ErrorIcon color = "warning"  fontSize = 'small'/>  Please enter valid username or password</Error>
                        
                    }
                    <TextField variant='standard' label='Enter Password'   name = 'password'   onChange={(e)=>onValueChange(e)}  />

                    <Text> By continuing, you agree to Flipkart's Terms of Use and Privacy Policy. </Text>

                    <LoginButton onClick={loginUser}>Login</LoginButton>
                    <Typography style={{textAlign:'center',fontSize:'12px', color:'gray'}}>OR</Typography>
                    <RequestOTP>Request OTP</RequestOTP>
                    <CreateAccount onClick={toggleSignup} >New to Flipkart? Create an account</CreateAccount>
                </Wrapper>

                :

                <WrapperSignup>                                                                    
                    <TextField variant='standard'  label='Enter Firstname'  name='firstname'   onChange={(e)=>onInputChange(e)} />
                    <TextField variant='standard'  label='Enter Lastname'   name='lastname'    onChange={(e)=>onInputChange(e)} />
                    <TextField variant='standard'  label='Enter Email'      name='email'       onChange={(e)=>onInputChange(e)} />
                    <TextField variant='standard'  label='Enter Password'   name='password'    onChange={(e)=>onInputChange(e)} />
                    <TextField variant='standard'  label='Enter Number'     name='number'      onChange={(e)=>onInputChange(e)} />
                    
                    <Text> By continuing, you agree to Flipkart's Terms of Use and Privacy Policy. </Text>
                    <LoginButton onClick={signupUser} >Continue</LoginButton>
                    <RequestOTP onClick={toggleLogin} >Existing User?Log in</RequestOTP>
                </WrapperSignup>

                }
            </Box>    
        </Component>
      </Dialog>
    
    </>
  )
}

export default LoginDialog