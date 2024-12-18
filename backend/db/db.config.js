const mongoose = require("mongoose")

connectToDb = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("MongoDB Connected successfully")
    })
    .catch(err => console.log(err))
}

module.exports = connectToDb;