import axios from 'axios';


const URL = 'https://magnificent-newt-housecoat.cyclic.app';
export const authenticateSignup = async(data) => {

    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log("Error while Signup",error);
    }

}    


export const authenticateLogin = async(data) => {

    try {
       return await axios.post(`/login`, data)
    } catch (error) {
        console.log("Error while Logging in",error);
        return error.response;
    }

}    



export const addCart = async(data) => {

    try {
       return await axios.post(`/addToCart`, data)
    } catch (error) {
        console.log("Error while adding to cart",error);
        return error.response;
    }

}    



