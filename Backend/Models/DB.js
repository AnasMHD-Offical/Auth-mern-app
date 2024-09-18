const mongoose = require("mongoose")
const mongodb_url = process.env.MONGODB_URI

const db_connect = async () => {
    try {

        const userData = await mongoose.connect(mongodb_url)
        if (userData) {
            console.log("..Mongodb connected successfully..");
        } else {
            console.log("!!!Mongodb falied to connect..");

        }
    } catch (error) {
        console.log(error.message);
    }
}

db_connect()