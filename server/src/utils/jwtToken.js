const config = require('../config/keys')
const sendToken = (user, statusCode, res) => {

    // Create Jwt token
    const token = user.generateAuthToken();

    // Options for cookie

    const options = {
        expires: new Date(
            Date.now() + 1 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    })
}

module.exports = sendToken;