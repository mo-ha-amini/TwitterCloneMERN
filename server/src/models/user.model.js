const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator= require('validator')
const {roles} = require('../config/roles')
const { ErrorHandler } = require('../utils/error');
const { generateAccessToken, hashPassword } = require('../utils/auth') 
const {formatUsername} = require('../utils/helper')
const { paginatePlugin } = require('../utils/mongo')


const UserSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true,
        trim: true,
    },

    username:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        validate(value){
            if(!value.match(/^[0-9a-zA-Z_.-]+$/)){
                throw new ErrorHandler(400, 'username must only contain numbers, letters, ".", "-", "_"');
            }
        }
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new ErrorHandler(400, 'Invalid email');
          }
        },
    },

    password:{
        type: String,
        required: true,
        minlength:8,
        validate(value){
            if(!value.match(/\d/) || !value.match(/[a-zA-Z]/)){
                throw new ErrorHandler(400, 'Password must contain at least one letter and one number');
            }
        }
    },

    role:{
        type:String,
        enum: roles,
        default: 'user'
    },

    avatar: {
        type: String,
        validate(value) {
          if (!validator.isURL(value)) {
            throw new ErrorHandler(400, 'Avatar must be a valid URL');
          }
        },
    },

}, { timestamps: true })


// Add paginate plugin
UserSchema.plugin(paginatePlugin);


UserSchema.pre('save', async function(next){
    const user = this

    if (user.isModified('password')){
        try {
            const hashedPassword = await hashPassword(user.password, 10)
            user.password = hashedPassword
        } catch(err) {
            return next(err)
        }
    }

    if (user.isModified('username')){
        user.username = formatUsername(user.username)
    }
})

UserSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password;
    return user;
};
  
UserSchema.methods.generateAuthToken = function () {
    const user = this;
    const token = generateAccessToken(user.id);
    return token;
};

UserSchema.statics.findByCredentionals = async function (username, password, isEmail){
    
    const user = await this.findOne({
        [isEmail ? 'email' : 'username']: username
    }).exec()

    if(!user){
        throw new ErrorHandler(400, 'Invalid Login credentionals')
    }

    isPasswordMatch = await bcrypt.compare(password, user.password)
    if(!isPasswordMatch){
        throw new ErrorHandler(400, 'Invalid Login credentionals')
    }

    return user
}

UserSchema.statics.isEmailTaken = async function(email, excludeUserId){
    const user = await this.findOne({
        email: email,
        _id: {$ne: excludeUserId}
    })

    return !!user;
}

UserSchema.statics.isUsernameTaken = async function(username, excludeUserId){
    const user = await this.findOne({
        username: username,
        _id: {$ne: excludeUserId}
    })

    return !!user;
}


module.exports = mongoose.model('User', UserSchema)