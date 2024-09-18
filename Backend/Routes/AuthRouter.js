const router = require("express").Router()
const { signup } = require("../Controllers/AuthController")
const { LoginValidation, signupValidation } = require("../Middlewares/AuthValidation")
router.get("/login", (req, res) => {
    res.send("Login successfully....")
})
router.post("/signup", signupValidation, signup)

module.exports = router