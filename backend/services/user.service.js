const userModel = require("../models/user.model")

module.exports.createUser = async ({firstName, LastName, email, password})=>{
    if(!firstName || !email || !password){
        throw new Error('All fields are required')
    }
    const user = userModel.create({
        fullName: {
            firstName,
            LastName,

        },
        email,
        password
    })

    return user
}