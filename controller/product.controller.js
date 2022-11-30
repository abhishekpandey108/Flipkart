import Product from '../model/product.schema.js';
import axios from 'axios'
export const getProducts= async(req,res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}    



export const getProductById= async(req,res) => {
    try {
        const id = req.params.id;
        const products = await Product.findOne({'id':id});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}    

