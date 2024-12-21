
const userModel = require("../models/user.model")
const userService = require('../services/user.service')
const { validationResult } = require('express-validator')
const blacklistTokenModel = require("../models/blacklist-token.model")
module.exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json(
                {
                    errors: errors.array()
                }
            )
        }
        const { fullName, email, password } = req.body;
        const isUserAlreadyRegistered = await userModel.findOne({ email })
        if (isUserAlreadyRegistered) {
            return res.status(400).json({
                message: "User with this email already exists"
            })
        }

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
    } catch (exception) {
        throw exception
    }
}
module.exports.loginUser = async (req, res, next) => {
    
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json(
                {
                    errors: errors.array()
                }
            )
        }
        const { email, password } = req.body;

        const user = await userModel.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await user.comparePassword(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = user.generateAuthToken();

        res.cookie('token', token);

        res.status(200).json({
            Result: {
                User_Info: user,
                token: token
            },
            msg: "Successfully Logged In",
            meta: null
        })
    
}
module.exports.getUserProfile = async (req, res, next) => {
    try {
     res.status(200).json({
         Result: {
             User_Info: req.user
         },
         msg: "Your Profile",
         meta: null
     })
    }
    catch (exception) {
        throw exception
    }
}
module.exports.logoutUser = async (req, res, next) => {
    try {
        res.clearCookie('token');

        const token = req.cookies.token || req.headers.authorization.split(' ')[1];
        await blacklistTokenModel.create({ token });
        res.status(200).json({
            Result: null,
            msg: "Successfully Logged Out",
            meta: null
        })
    }
    catch (exception) {
        throw exception
    }
}


