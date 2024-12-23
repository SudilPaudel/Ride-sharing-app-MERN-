const captainModel = require("../models/captain.models")
const blacklistTokenModel = require("../models/blacklist-token.model")
const { validationResult } = require("express-validator")
const captainService = require("../services/captain.services")

module.exports.registerCaptain = async (req, res, next) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            })
        }
        const { email, fullName, password, vehicle } = req.body;
        const isCaptainAlreadyRegistered = await captainModel.findOne({email})
        if(isCaptainAlreadyRegistered){
            return res.status(400).json({
                message: "Captain with this email already exists"
            })
        }
        const hashedPassword = await captainModel.hashPassword(password)
        const captain = await captainService.createCaptain({
            firstName: fullName.firstName,
            lastName: fullName.lastName,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType

        });

        const token = captain.generateAuthToken()
        res.status(201).json({
            Result: {
                Captain_Info: captain,
                token: token
            },
            msg: "Successfully Registered Captain",
            meta: null
        })
    }catch(exception){
        throw exception
    }
}

module.exports.loginCaptain = async (req, res, next) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            })
        }
        const { email, password } = req.body;
        const captain = await captainModel.findOne({email}).select('+password')
        if(!captain){
            return res.status(400).json({
                message: "Captain with this email does not exist"
            })
        }
        const isPasswordValid = await captain.comparePassword(password, captain.password)
        if(!isPasswordValid){
            return res.status(400).json({
                message: "Invalid Password"
            })
        }
        const token = captain.generateAuthToken()
        res.cookie("token", token)
        res.status(200).json({
            Result: {
                Captain_Info: captain,
                token: token
            },
            msg: "Successfully Logged In",
            meta: null
        })
    }catch(exception){
        throw exception
    }
}

module.exports.getCaptainProfile = async (req, res, next) => {
    try{
        res.status(200).json({
            Result: {
                Captain_Info: req.captain
            },
            msg: "Captain Profile fetched successfully",
            meta: null
        })
    }catch(exception){
        throw exception
    }
}

module.exports.logoutCaptain = async (req, res, next) => {
    try{
        const captain = req.captain
        res.clearCookie('token');
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];
        const isBlacklisted = await blacklistTokenModel.create({ token })
        
        res.status(200).json({
            Result: captain.fullName,
            message: "Captain Logged Out Successfully",
            meta: null
        })
    }catch(exception){
        throw exception
    }
}