const express = require("express")
const router = express.Router()
const {body} = require("express-validator")
const userController = require("../controllers/user.controller")
router.post('/register', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstName').isLength({min: 3}).withMessage("First Name should be atleast 3 characters"),
    body('password').isLength({min: 6}).withMessage("Password must be atleast 6 characters")
], userController.registerUser)

module.exports = router