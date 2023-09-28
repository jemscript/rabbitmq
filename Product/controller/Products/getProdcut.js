const product = require('../../schema/product')

const getProduct = async(req,res)=>{
    try{
        const getbanao = await product.find({})
        res.send(getbanao);
    }
    catch(err){
        console.log("Error in getbanao:");
        res.status(400).send(err)
    }
}

module.exports = { getProduct }