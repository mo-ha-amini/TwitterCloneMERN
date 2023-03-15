const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.join(__dirname, '../../.env')})

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongoose: {
      uri: process.env.MONGO_URI,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expires: process.env.JWT_EXPIRES_TIME,
    },
    cookie:{
      expire: process.env.COOKIE_EXPIRES_TIME
    }
  };