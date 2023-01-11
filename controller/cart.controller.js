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
    let id = req.params.id;
      let cart = await Cart.findById(id);
      if (cart) {
          let { item_quantity } = cart;
          const newQuantity = item_quantity + 1;
      
         const newData= await Cart.findByIdAndUpdate(
            req.params.id,
            {
              $set: { item_quantity: newQuantity },
            },
            { new: true }
          );
      
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
    const id = req.params.id;
      const cart = await Cart.findById({ _id: id });
      if (cart) {
        let { item_quantity } = cart;
        const newQuantity = item_quantity - 1;
        console.log(newQuantity)
        var updatedData = null;
        if (newQuantity <= 0) {
          updatedData = await Cart.findByIdAndDelete({ _id: id },{new:true});
        }
        else {
          updatedData = await Cart.findByIdAndUpdate(
              { _id: id },
              {
                $set: {
                  item_quantity: item_quantity - 1,
                },
                }, {
                  new:true
              }
            );
        }
      
  
      return res.status(201).send({
        message: "successfully decremented",
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
    const id = req.params.id;
    const cart = await Cart.findByIdAndDelete({ _id: id },{new:true});
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