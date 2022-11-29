import Product from './model/product.schema.js';
import { products } from './constants/data.js';

const DefaultData = async ()=> {
    try {
        await Product.deleteMany();
        await Product.insertMany(products);
        console.log('Inserted');
    } catch (error) {
        console.error(error.message);
    }
}

export default DefaultData;

