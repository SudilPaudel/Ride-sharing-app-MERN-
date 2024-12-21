const express = require('express');

const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('First Name should be atleast 3 characters'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color should be atleast 3 characters'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate should be atleast 3 characters'),
    body('vehicle.capacity').isLength({ min: 1 }).withMessage('Capacity should be atleast 1'),
    body('vehicle.vehicleType').isIn(['bike', 'car', 'auto']).withMessage('Invalid Vehicle Type'),
    
], captainController.registerCaptain);

module.exports = router;