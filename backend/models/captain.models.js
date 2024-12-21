const mongoose =    require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const captainSchema = new mongoose.Schema({
    fullName:{
        firstName: {
            type: String,
            required: true,
            minlength: [3, "First Name should be atleast 3 characters"]
        },
        lastName: {
            type: String,
            minlength: [3, "Last Name should be atleast 3 characters"]
        }
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        matches: [/\S+@\S+\.\S+/, "Invalid Email"]
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be atleast 6 characters"]
    },
    socketId: {
        type: String
    },
    status:{
        type: String,
        enum: ["active", "inactive"],
        default: "inactive"
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, "Color should be atleast 3 characters"]
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, "Plate should be atleast 3 characters"]
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity should be atleast 1"]
        },
        vehicleType: {
            type: String,
            enum: ["bike", "car", "auto"],
            required: true
        }
    },
    location:{
       latitude: {
           type: Number,
           
       },
       longitude: {
           type: Number,
           
       }
    }

})
captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}


captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}


captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}
const captainModel = mongoose.model("captain", captainSchema)
module.exports = captainModel