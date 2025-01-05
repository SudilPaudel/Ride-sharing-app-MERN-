const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const cors = require("cors")
const app = express()
const cookieParser = require("cookie-parser")
const connectToDb = require("./db/db.config")
const userRoutes = require("./routes/user.router")
const captainRoutes = require("./routes/captain.router")
const mapsRoutes = require("./routes/maps.routes")
const rideRoutes = require('./routes/ride.router')
connectToDb()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded(
    {
        extended: true
    }
))
app.use(cookieParser())
app.get("/", (req, res)=>{
    res.send("hello world")
})

app.use('/user', userRoutes)
app.use('/captain', captainRoutes)
app.use('/maps', mapsRoutes)
app.use('/ride', rideRoutes)

module.exports= app