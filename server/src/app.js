const express = require('express');
require('express-async-errors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const config = require('./config/keys');
var cookies = require("cookie-parser");
// const { jwtStrategy } = require('./config/passport');
const auth = require('./routers/auth.route')
const user = require('./routers/user.route')
const tweet = require('./routers/tweet.route')
const profile = require('./routers/profile.route')
// const { getRoutes } = require('./routes');
// const testDataRoutes = require('./routes/testDataRoutes');
const { handleNotFound, handleError } = require('./utils/error');

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(compression());
app.use(cookies());

if (config.env !== 'test') {
  app.use(morgan('dev'));
}

app.use(cors());
app.options('*', cors());
app.use(auth)
app.use(user)
app.use(tweet)
app.use(profile)

// jwt authentication
// app.use(passport.initialize());
// passport.use('jwt', jwtStrategy);

// Handle routes
// app.use('/api', getRoutes());

// if (config.env === 'development' || config.env === 'test') {
//   app.use('/testData', testDataRoutes);
// }

// 404 error handler
app.use(handleNotFound);

// Error handler
app.use(handleError);

module.exports = app;