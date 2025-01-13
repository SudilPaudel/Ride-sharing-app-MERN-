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
    rideController.getFare
)
router.post('/confirm', 
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Inavalid Ride ID'),
    rideController.confirmRide

)
router.get('/start-ride', 
    authMiddleware.authCaptain,
    query('rideId').isMongoId().withMessage("Invalid Ride Id"),
    query('otp').isString().isLength({min:6 , max:6}).withMessage("Invalid otp"),
    rideController.startRide

)

router.post('/end-ride', authMiddleware.authCaptain, body('rideId').isMongoId().withMessage("Invalid Ride ID"), rideController.endRide)



module.exports = router