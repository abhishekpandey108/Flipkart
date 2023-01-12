import axios from 'axios';


//const URL = 'https://magnificent-newt-housecoat.cyclic.app';
const URL = 'http://localhost:8080'
export const authenticateSignup = async(data) => {

    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log("Error while Signup",error);
    }

}    


export const authenticateLogin = async(data) => {

    try {
       return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log("Error while Logging in",error);
        //return error.response;
    }

}    



export const addCart = async(data) => {

    try {
       let id =  data.product_id;
       return await axios.post(`${URL}/addToCart/${id}`, data)
    } catch (error) {
        console.log("Error while adding to cart",error);
        return error.response;
    }

}    


export const getCart = async(id) => {

    try {
      console.log("api 46 : ", id)
       return await axios.get(`${URL}/getCart/${id}`)
    } catch (error) {
        console.log("Error while getting cart items",error);
        return error.response;
    }

}    


export const incCart = async(data) => {

    try {
      console.log("api 59 : ", data);
       return await axios.post(`${URL}/incCart`,data);
    } catch (error) {
        console.log("Error while increasing cart item ",error);
        return error.response;
    }

}    



export const decCart = async(data) => {

    try {
      console.log("api 73 : ", data);
       return await axios.post(`${URL}/decCart`,data);
    } catch (error) {
        console.log("Error while decreasing cart item ",error);
        return error.response;
    }

}    



export const removeFromCart = async(data) => {

    try {
      console.log("api 87 : ", data);
       return await axios.post(`${URL}/removeFromCart`,data);
    } catch (error) {
        console.log("Error while removing cart item ",error);
        return error.response;
    }

}   