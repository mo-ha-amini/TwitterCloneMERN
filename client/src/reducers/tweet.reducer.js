import {
  NEW_TWEET_REQUEST,
  NEW_TWEET_SUCCESS,
  NEW_TWEET_FAIL,
  NEW_TWEET_RESET,
  FEED_TWEET_REQUEST,
  FEED_TWEET_SUCCESS,
  FEED_TWEET_FAIL,
  FEED_TWEET_RESET,
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

export const FeedsTweetReducer = (state = { tweets: {} }, action) => {
  switch (action.type) {
    case FEED_TWEET_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case FEED_TWEET_SUCCESS:
      return {
        success: true,
        loading: false,
        tweets: action.payload
      };

    case FEED_TWEET_FAIL:
      return {
        ...state,
        error: action.payload,
        success: false,
        user: null
      };

    case FEED_TWEET_RESET:
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
