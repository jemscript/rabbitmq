const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name:'string',
    email:'string',
    password:'string',
})

const userModel = new mongoose.model("user",UserSchema)
module.exports = userModel
