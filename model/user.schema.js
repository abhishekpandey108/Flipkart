import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    firstname : { type: String , required: true , trim: true , min : 5 , max : 20 },
    lastname  : { type: String , required: true , trim: true , min : 5 , max : 20 },
    email     : { type: String , required: true , trim: true , unique : true , lowecase : true },
    password  : { type: String , required: true },
    number    : { type: Number , required: true },
    tokens    : [
        {
            token : { type: String , required: true}
        }
    ] 
},
{
    versionKey: false,
});    

// userSchema.pre('save', async function(next){
//     if(this.isModified('password')){
//         this.password = await bcrypt.hash(this.password,12);
//     }
//     next();    
// })


userSchema.methods.generateToken = async function(){
    try {
        let token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}


const User = mongoose.model('User', userSchema);
export default User;