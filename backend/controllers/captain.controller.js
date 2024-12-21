const captainModel = require("../models/captain.models")
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