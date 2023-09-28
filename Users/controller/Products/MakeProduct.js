const product = require('../../schema/product')
const postProduct = async(req,res)=>{
    try{
        const addProduct = new product(req.body)
        console.log("data",req.body);
        const insertProduct = await addProduct.save({});
        res.status(201).send(insertProduct)
    }
    catch(err){
        console.log("Email already exist");
        res.status(409).send(err)
    }
}
 
module.exports = { postProduct }