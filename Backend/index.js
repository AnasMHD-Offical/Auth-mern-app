const express = require("express")
const app = express()
require("dotenv").config()
require("./Models/DB")
const Router = require("./Routes/AuthRouter")
const ProductRouter = require("./Routes/ProductRoutes")
const cors = require("cors")

// Assessing the PORT from .env file
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use("/",Router)
app.use("/product",ProductRouter)
// app.get("/",(req,res)=>{
//     res.send("Hello")
// })


app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})