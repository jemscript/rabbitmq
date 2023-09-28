const userSchema = require('../../schema/user')

const createUser = async(req,res)=>{
    try{
        const user = new userSchema(req.body)
        const result = await user.save()
        // result = result.toObject()
        res.send(result)
    }catch(err){
        console.log("Error in createUser:");
        res.status(409).send(err)
    }
}

module.exports = {createUser}