import {
  NEW_TWEET_REQUEST,
  NEW_TWEET_SUCCESS,
  NEW_TWEET_FAIL,
  NEW_TWEET_RESET,
<<<<<<< HEAD
  FEED_TWEET_REQUEST,
  FEED_TWEET_SUCCESS,
  FEED_TWEET_FAIL,
  FEED_TWEET_RESET,
=======
  FEED_TWEETS_REQUEST,
  FEED_TWEETS_SUCCESS,
  FEED_TWEETS_FAIL,
  FEED_TWEETS_RESET,
>>>>>>> fixfeed
  CLEAR_ERRORS,
} from "../constants/tweet.constant";

export const newTweetReducer = (state = { tweet: {} }, action) => {
  switch (action.type) {
    case NEW_TWEET_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case NEW_TWEET_SUCCESS:
      return {
        success: true,
        loading: false,
        tweet: action.payload.tweet,
      };

    case NEW_TWEET_FAIL:
      return {
        ...state,
        error: action.payload,
        success: false,
      };

    case NEW_TWEET_RESET:
      return {
        ...state,
        success: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

<<<<<<< HEAD
export const FeedsTweetReducer = (state = { tweets: {} }, action) => {
  switch (action.type) {
    case FEED_TWEET_REQUEST:
=======
export const feedTweetsReducer = (state = { tweets: {} }, action) => {
  switch (action.type) {
    case FEED_TWEETS_REQUEST:
>>>>>>> fixfeed
      return {
        ...state,
        loading: true,
        success: false,
      };

<<<<<<< HEAD
    case FEED_TWEET_SUCCESS:
=======
    case FEED_TWEETS_SUCCESS:
>>>>>>> fixfeed
      return {
        success: true,
        loading: false,
        tweets: action.payload
      };

<<<<<<< HEAD
    case FEED_TWEET_FAIL:
=======
    case FEED_TWEETS_FAIL:
>>>>>>> fixfeed
      return {
        ...state,
        error: action.payload,
        success: false,
<<<<<<< HEAD
        user: null
      };

    case FEED_TWEET_RESET:
      return {
        ...state,
        success: false,
=======
        loading: false,
      };

    case FEED_TWEETS_RESET:
      return {
        ...state,
        success: false,
        loading: false,
>>>>>>> fixfeed
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
