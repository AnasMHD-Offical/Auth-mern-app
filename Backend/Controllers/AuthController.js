const UserModel = require("../Models/User")
const bcrypt = require("bcrypt")
const Jwt = require("jsonwebtoken")
const errorMsg = "Auth failed , email or password is wrong"
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
const Login = async (req,res) => {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false })
        }
        const isPasswordSame = await bcrypt.compare(password, user.password)
        if (!isPasswordSame) {
            return res.status(403)
                .json({ message: errorMsg, success: false })
        }
        const JwtToken = Jwt.sign(
            { email: user?.email, id: user?.id },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        )
        res.status(200)
            .json({ message: "Login successfully", success: true, JwtToken, email, name: user.name, phone: user.phone })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    signup,
    Login,
}