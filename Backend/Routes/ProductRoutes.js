const router = require("express").Router()
const auth = require("../Middlewares/Auth")

router.get("/",auth,(req,res)=>{
    console.log(">>>Login user details<<<",req.user);
    
    res.status(200).json([
        {
            name:"IPhone",
            price: 160000
        },
        {
            name: "Macbook pro",
            price: 2500000
        }
    ])
})

module.exports = router