
const mapsService = require('../services/maps.service');
const {validationResult} = require('express-validator');
module.exports.getAddressCoordinates = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {address} = req.query;
    try{
        const coordinates = await mapsService.getAddressCoordinates(address);
        res.status(200).json(coordinates);
    }catch(error){
        res.status(404).json({message: "Unable to get coordinates"});
    }
}

module.exports.getDistanceTime = async (req, res) => {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        const {origin, destination} = req.query;
        const distanceTime = await mapsService.getDistanceTime(origin, destination);
        res.status(200).json(distanceTime);
        
    }
    catch(error){
        res.status(404).json({message: "Unable to get distance and time"});
    }
}

module.exports.getSuggestions = async (req, res) => {
   
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        const {input} = req.query;
        const suggestions = await mapsService.getSuggestions(input);
        res.status(200).json(suggestions);
    }catch(error){
        res.status(404).json({message: "Unable to get suggestions"});
    }
}