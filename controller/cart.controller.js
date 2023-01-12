import Cart from '../model/cart.schema.js';

export const getCart = async (req, res) => {
  
  try {
    const { id } = req.params;
    const products = await Cart.find({"user_id":id})
      return res.status(200).json(products);
      
  } catch (error) {
    return res.status(500).json({ message: "internal Server Error" })
  }
};

export const getOneItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Cart.findOne({ item_Id: id });

    if (item) {
      return res.send({ status: true });
    } else {
      return res.send({ status: false });
    }
  } catch (error) {
    res.send("error");
  }
};


export const addToCart = async (req, res) => {
  try {
    let c = req.body;
    console.log(c);
    // let obj = await Cart.create(c);
    // console.log(obj);
    const newCart = new Cart(c);
    const data = await newCart.save();
    console.log("Cart saved : ", data);
    // const carts = new Cart(req.body);
    // const data = await carts.save();
    
    return res.status(200).send({
      message: "Successfully Added",
      carts: data,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Something went wrong",
      error: error.message,
    });
  }
};







export const incCart = async (req, res) => {
  try {
    let {user_id,product_id} = req.body;
      let cart = await Cart.findOne({"user_id" : user_id,"product_id" : product_id});
      console.log("Cart Controller Line 65 : ",cart);
      if (cart) {
          let { quantity } = cart;
          console.log("Cart Controller Line 68 :", quantity)
          const newQuantity = quantity + 1;
      
         const newData = await Cart.findOneAndUpdate(
          {"user_id" : user_id, "product_id" : product_id},
            {
              $set: { quantity: newQuantity },
            },
            { new: true }
          );

          console.log("Line 79 : ",newData)
      
          return res.status(201).send({
            message: "successfully incremented",
            carts: newData,
          });
          
      }
      else {
        return res.status(404).send({
            status:"Failed",
            message: "Item not Found",
            
          });
      }
  } catch (error) {
    return res.status(500).send({
      message: error,
    });
  }
};

export const decCart = async (req, res) => {
  try {
      let {user_id,product_id} = req.body;
      let cart = await Cart.findOne({"user_id" : user_id,"product_id" : product_id});
      console.log("Cart Controller Line 105 : ",cart);
    
      if (cart) {
        let { quantity } = cart;
        const newQuantity = quantity - 1;
        console.log("Cart Controller Line 110 :",newQuantity)
       if(newQuantity==0){
        await Cart.findOneAndDelete({"user_id" : user_id,"product_id" : product_id});
       }
        
        else {
          const newData = await Cart.findOneAndUpdate(
            {"user_id" : user_id, "product_id" : product_id},
              {
                $set: { quantity: newQuantity },
              },
              { new: true }
            );

            console.log("Cart Controller Line 124 : ",newData);
        }
      
  
      return res.status(201).send({
        message: "Successfully decremented",
        carts: updatedData,
      });
      }
      else {
          return res.status(404).send({
            status:"Failed",
            message: "Item not Found",
            
          });
      }
     
  } catch (error) {
    return res.status(500).send({
      message: error,
    });
  }
};

export const delCart = async (req, res) => {

  try {
    let {user_id,product_id} = req.body;
    const cart = await Cart.findOneAndDelete({"user_id" : user_id,"product_id" : product_id});
      if (cart) {
        return res.status(201).send({
            message: "successfully deleted",
            carts: cart,
          });
      }
      else {
        return res.status(404).send({
            status:"Failed",
            message: "Item not Found",
            
          });
      }
    
  } catch (error) {
    return res.status(500).send({
      message: error,
    });
  }
};


export const deleteAllItem = async(req,res) => {
  try {
    const { id } = req.params;
    await Cart.deleteMany({ user_Id: id });
    return res.status(200).send({
      status: "success",
      message:"Checkout Successful"
    })
  } catch (error) {
    res.status(500).send({
      status: "Failed",
      message:"Internal Server Error"
    })
  }
}