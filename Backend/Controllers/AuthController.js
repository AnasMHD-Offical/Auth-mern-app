const UserModel = require("../Models/User")
const bcrypt = require("bcrypt")

const signup = async (req, res) => {
    try {
        const { email, name, password, phone } = req.body
        const user = await UserModel.findOne({ email })
        if (user) {
            return res.status(409)
                .json({ message: "User is already exist", success: false })
        }
        const userModel = new UserModel({ name, email, password, phone })
        userModel.password = await bcrypt.hash(password, 10)
        await userModel.save()
        res.status(201)
            .json({ message: "Signup successfully", success: true })
    } catch (error) {
        res.status(500)
            .json({ message: "Internal server error", success: false })
    }
}

module.exports = {
    signup
}