import User from "../model/user.schema.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const userSignup = async(req,res) => {
console.log("line 6 in user controller")
    try {
        const user = req.body;
        let {firstname,lastname,email,password,number} = user;
        console.log(number," ",email," ",firstname," ",lastname," ");
        let alreadyexist = await User.findOne({number: number});
        console.log(alreadyexist)
        if(alreadyexist){
            return res.status(400).send({
                error : 'user is already registered'
            })
        }else{
            // password = bcrypt.hashSync(password);
            // console.log(password)
            // user.password = password
            const newUser = new User(user);

            await newUser.save();

            return res.status(201).send({
                message : 'successfully registered',
                user : user
            })
        }
    } catch (error) {
        return res.status(500).send({
            message : "Signup Error 500"
        })
    }
        
}    



//const JWT_SECRET = '1234'



export const userLogin = async(req,res) => {

    try {
        let name = req.body.firstname;
        let pass = req.body.password;
        console.log('name: ',name ,'pass: ',pass);
        let user = await User.findOne({ firstname: name});
        let hash = user.password;
        var bool = await bcrypt.compare(pass, hash)
        
        if(user && bool){ 
            // let token = jwt.sign({
            //     _id : user._id,
            //     number : user.number
            // }, JWT_SECRET)
                            
            
            const token = await user.generateToken();
            console.log("token: ",token);
            res.cookie("jwt", 'token',{
                expires : new Date(Date.now() + 25892000),
                httpOnly : true
            })
            res.cookie("jwt", token,{
                expires : new Date(Date.now() + 25892000),
                httpOnly : true
            }); 
            
            return res.status(200).json({ data : user,token : token });
        }
        else{
            return res.status(400).json({message: "Username or password is incorrect"});
        }
        
    } catch (error) {
        return res.status(500).json(error.message);
    }

}    
