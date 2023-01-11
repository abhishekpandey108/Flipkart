import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    user_id:{type : Number, required: true},
    product_id : {type : String, required: true},
    url : {type : String, required: true},
    title : {type : String, required: true},
    cost : {type : Number, required: true},
    mrp : {type : Number, required: true},
    discount : {type : String, required: true},
    quantity : {type : Number, default: 1}    
},
{
    versionKey: false,
   // timestamps: true
}
);

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;