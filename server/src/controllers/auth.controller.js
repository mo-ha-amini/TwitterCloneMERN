const validator = require('validator')
const { pick } = require('lodash')
const User = require('../models/user.model')
const Profile = require('../models/profile.model')
const { ErrorHandler } = require('../utils/error')
const sendToken = require('../utils/jwtToken')

exports.registerUser = async(req, res) =>{
    
    const userBody = pick(req.body, ['name','username', 'email', 'password', 'avatar'])

    if (await User.isEmailTaken(userBody.email)) {
        throw new ErrorHandler(400, 'Email already taken');
    }

    if (await User.isUsernameTaken(userBody.username)) {
        throw new ErrorHandler(400, 'Username already taken');
    }

    const user = await User.create(userBody)

    // const token = await user.generateAuthToken()
    await Profile.create({ user: user._id })
    
    sendToken(user, 200, res)
}


exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    const isEmail = validator.isEmail(username);
 
  
    const user = await User.findByCredentionals(username, password, isEmail);
    // const token = await user.generateAuthToken();

    sendToken(user, 200, res)
  };