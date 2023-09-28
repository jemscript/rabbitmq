const userSchema = require('../../schema/user')

const readUser = async (req, res) => {
    try {
        const user = await userSchema.find({})
        const userCount = await userSchema.countDocuments({});
        res.status(200).send({user,userCount})
        // see the difference
        // res.status(200).send(user)
        // res.status(200).send({user})
    } catch (err) {
        console.log("Error in readUser:");
        res.status(400).send(err)
    }
}

module.exports = { readUser } 