const router = require('express').Router();
const auth = require('../middleware/auth');
const {

    getFeedsTweets,
    getTweets,
    getTweet,
    createTweet,
    updateTweet,
    deleteTweet,
    likeTweet,
    unlikeTweet,
    retweet,
    unRetweet

} = require('../controllers/tweet.controller')

const { isAuthenticatedUser } = require('../middleware/auth')

router.route('/feed').get(isAuthenticatedUser, getFeedsTweets);

// router
//   .route('/like/:tweetId')
//   .post(auth(), likeTweet)
//   .delete(auth(), unlikeTweet);

// router
//   .route('/retweet/:tweetId')
//   .post(auth(), retweet)
//   .delete(auth(), unRetweet);

router
  .route('/getTweets')
  .get(isAuthenticatedUser, getTweets)
  .post(isAuthenticatedUser ,createTweet);

// router
//   .route('/:tweetId')
//   .get(getTweet)
//   .patch(auth(), updateTweet)
//   .delete(auth(), deleteTweet);

module.exports = router;