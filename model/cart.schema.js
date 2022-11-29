import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    user_Id:{type : String, required: true},
    products : [
        {
          product_id : {type : String, required: true},
          quantity : {type : Number, default: 1}
        }
    ]
},
{
    versionKey: false,
    timestamps: true
}
);

const Cart = mongoose.model('Cart', cartSchema);

export default Cart