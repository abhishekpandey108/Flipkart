import express, { Router } from 'express';
import {getProducts , getProductById} from '../controller/product.controller.js';
import {userLogin,userSignup} from '../controller/user.controller.js';
import { addToCart, getCart } from '../controller/cart.controller.js';

const router = express.Router();


router.post('/signup',userSignup);

router.post('/login',userLogin);

router.get('/products', getProducts);

router.get('/product/:id', getProductById);

router.post('/addToCart/:id', addToCart);

router.get('/getCart/:id', getCart);


export default router;