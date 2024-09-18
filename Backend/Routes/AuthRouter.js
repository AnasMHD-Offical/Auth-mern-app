const router = require("express").Router()
const { signup , Login } = require("../Controllers/AuthController")
const { LoginValidation, signupValidation } = require("../Middlewares/AuthValidation")

router.post("/signup", signupValidation, signup)
router.post("/login", LoginValidation, Login)

module.exports = router