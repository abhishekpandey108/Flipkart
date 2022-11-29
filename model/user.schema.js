import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname : { type: String , required: true , trim: true , min : 5 , max : 20 },
    lastname  : { type: String , required: true , trim: true , min : 5 , max : 20 },
    email     : { type: String , required: true , trim: true , unique : true , lowecase : true },
    password  : { type: String , required: true },
    number    : { type: Number , required: true } 
},
{
    versionKey: false,
    timestamps: true
}
);    

const User = mongoose.model('User', userSchema);

export default User;