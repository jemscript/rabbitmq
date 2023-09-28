const User = require('../../schema/user')
const _ = require('lodash')

const Login = async (req, res) => {
    console.log(req.body, "hhh");
    try {
        // Simulating an error condition
        if (req.body.test === 'error') {
            throw new Error('Test error');
        }
        const LoggedInUser = await User.find(req.body).select('-password')
        // console.log("LoggedInUser",LoggedInUser[0].email);
        if (req.body.password && req.body.email) {
            console.log(LoggedInUser, "jj");
            if (!_.isEmpty(LoggedInUser)) {
                res.status(200).send({ LoggedInUser, result: "user Found" })
            } else {
                res.status(200).send({ result: "No Result Found" })
            }
        } else {
            res.status(400).send({ result: "User Not Found" })
        }
    } catch (err) {
        console.log("Error in Login");
        res.status(500).send(err)
    }
}

module.exports = { Login }