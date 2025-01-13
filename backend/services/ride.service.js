
const crypto = require('crypto')
const rideModel = require('../models/ride.model')
const mapsService = require('./maps.service');
const { sendMessageToSocketId } = require('../socket');
async function getFare(pickup, destination) {
    if(!pickup || !destination){
        throw new Error('Pickup and destiination are required')
    }
    const distanceTime = await mapsService.getDistanceTime(pickup, destination);
    const rates = {
        auto: { base: 50, perKm: 20, perMin: 2 },
        car: { base: 100, perKm: 30, perMin: 3 },
        moto: { base: 30, perKm: 15, perMin: 1 }
    };

    const fare = {};
    for (const vehicle in rates) {
        const { base, perKm, perMin } = rates[vehicle];
        fare[vehicle] = Math.round(
            base + 
            (((distanceTime.distance.value)/1000) * perKm) + 
            (((distanceTime.duration.value)/60) * perMin)
        );
    }

    return fare;
   
   
}

module.exports.getFare = getFare

function getOtp(num){
function generateOtp(num){
    const otp = crypto.randomInt(Math.pow(10, num-1),Math.pow(10, num)).toString();
    return otp
}
    return generateOtp(num)
}
module.exports.createRide = async ({user, pickup, destination, vehicleType})=>{
    if(!user || !pickup || !destination || !vehicleType){
        throw new Error('All fields are required')
    }
    const fare = await getFare(pickup, destination)
   
    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(6),
        fare: fare[vehicleType]
    })
    return ride

}


module.exports.confirmRide = async ({rideId, captain})=>{
    if(!rideId){
        throw new Error('Ride Id is required')
    }
    await rideModel.findOneAndUpdate({
        _id: rideId
    },{
        status: 'accepted',
        captain: captain._id
    })
    const ride = await rideModel.findOne({_id: rideId}).populate('user').populate('captain').select('+otp')
    if(!ride){
        throw new Error("Ride not found")
        
    }
    return ride;
}

module.exports.startRide = async({rideId, otp, captain})=>{
    if(!rideId || !otp){
        throw new Error("Ride Id and otp are required")
    }
    const ride = await rideModel.findOne({
        _id: rideId
    }).populate('user').populate('captain').select('+otp');

    if(!ride){
        throw new Error("Ride not found")
    }
    if(ride.status !== 'accepted'){
        throw new Error("ride not accepted")
    }
    if(ride.otp !== otp){
        throw new Error('Invalid OTP')

    }
    await rideModel.findOneAndUpdate({
        _id: rideId
    },{
        status: 'ongoing'
    })

    sendMessageToSocketId(ride.user.socketId,{
        event: 'ride-started',
        data: ride
    })
    return ride
}

module.exports.endRide = async ({rideId, captain})=>{
    if(!rideId){
        throw new Error("Ride Id is required")
    }
    const ride = await rideModel.findOne({
        _id: rideId,
        captain: captain._id
    }).populate('user').populate('captain').select('+otp')
    if(!ride){
        throw new Error("Ride not found")
    }
    if(ride.status !== 'ongoing'){
        throw new Error("ride not ongoing")
    }
    await rideModel.findOneAndUpdate({
        _id: rideId
    },{
        status: "completed"
    })
    return ride
}