const express = require('express')
const router = express.Router()
const {body, query} = require('express-validator')
const rideController = require('../controllers/ride.controllers')
const authMiddleware = require('../middleware/auth.middleware')

router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({min: 3}).withMessage("Invalid pickup location"),
    body('destination').isString().isLength({min: 3}).withMessage("Invalid destination location"),
    body('vehicleType').isString().isIn(['auto', 'car', 'moto']).withMessage("Invalid Vehicle type"),
    rideController.createRide

)

router.get('/get-fare',authMiddleware.authUser, 
    query('pickup').isString().isLength({min: 3}).withMessage("Invalid pickup location"),
    query('destination').isString().isLength({min: 3}).withMessage("Invalid Destination location"),
    rideController.getFare)

module.exports = router