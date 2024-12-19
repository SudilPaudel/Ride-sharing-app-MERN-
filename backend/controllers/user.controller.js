const { response } = require("../app")
const userModel = require("../models/user.model")
const userService = require('../services/user.service')
const { validationResult } = require('express-validator')
module.exports.registerUser = async(req,res,next)=>{
    try{
       const errors = validationResult(req)
       if (!errors.isEmpty()){
        return res.status(400).json(
            {
                errors: errors.array()
            }
        )
       }
       const { fullName, email, password }= req.body;

       const hashedPassword = await userModel.hashPassword(password);
       const user = await userService.createUser({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email: email,
        password: hashedPassword
       })

       const token = user.generateAuthToken();
       res.status(201).json({ 
           Result: {
            User_Info: user,
            token: token
            },
            msg: "Successfully Registered User",
            meta: null

           
        })
    }catch(exception){
        throw exception
    }
}

