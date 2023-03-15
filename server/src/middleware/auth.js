const jwt = require('jsonwebtoken')
const {ErrorHandler} = require('../utils/error');
const catchAsyncErrors = require('./catchAsyncErrors.js')
const User = require('../models/user.model')
const config = require('../config/keys');



exports.isAuthenticatedUser = catchAsyncErrors(async (req ,res,next)=>{
    const {token} = req.cookies

    if(!token){
        return next(new ErrorHandler('You have to login first!!',401))
    }

    const decoded = jwt.verify(token, config.jwt.secret)
    // console.log('req.user : ',decoded)

    req.user = await User.findById(decoded.sub)
    
    

    next()

})

exports.AuthorizedRoles = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
           return next(new ErrorHandler(`.اجازه دسترسی به این قسمت را ندارد ${req.user.role}`,403))
        }

        next()
    }
}