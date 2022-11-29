 import mongoose from 'mongoose';
 export const connection =  (userName,password) => {  
    let url = `mongodb+srv://${userName}:${password}@cluster0.iqiyx59.mongodb.net/?retryWrites=true&w=majority`;
    //const url = `mongodb://localhost:27017`
    try{
        mongoose.connect(url,{useUnifiedTopology:true , useNewUrlParser:true  })
        console.log(`Database connection established`);
    } catch (error) {
        console.log(error.message);
    }
}    

export default connection;
