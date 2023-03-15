import axios from 'axios'

import {
    NEW_TWEET_REQUEST,
    NEW_TWEET_SUCCESS,
    NEW_TWEET_FAIL,
<<<<<<< HEAD
    NEW_TWEET_RESET,
    FEED_TWEET_REQUEST,
    FEED_TWEET_SUCCESS,
    FEED_TWEET_FAIL,
    FEED_TWEET_RESET,

=======
    FEED_TWEETS_REQUEST,
    FEED_TWEETS_SUCCESS,
    FEED_TWEETS_FAIL,
>>>>>>> fixfeed
    CLEAR_ERRORS,
} from '../constants/tweet.constant'


export const newTweet = (tweetData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_TWEET_REQUEST })

        const config = {
            headers:{
                'Content-Type' : 'application/json'
            }
        }

        const { data } = await axios.post(`/getTweets`, tweetData, config)

        dispatch({ 
            type: NEW_TWEET_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_TWEET_FAIL,
            payload: error.response.data.message
        })
    }
}

export const feedTweets = () => async (dispatch) => {
    try {

<<<<<<< HEAD
        dispatch({ type: FEED_TWEET_REQUEST })
=======
        dispatch({ type: FEED_TWEETS_REQUEST })
>>>>>>> fixfeed

        // const config = {
        //     headers:{
        //         'Content-Type' : 'application/json'
        //     }
        // }

        const { data } = await axios.get(`/feed`)

        dispatch({ 
<<<<<<< HEAD
            type: FEED_TWEET_SUCCESS,
=======
            type: FEED_TWEETS_SUCCESS,
>>>>>>> fixfeed
            payload: data
        })

    } catch (error) {
        dispatch({
<<<<<<< HEAD
            type: FEED_TWEET_FAIL,
=======
            type: FEED_TWEETS_FAIL,
>>>>>>> fixfeed
            payload: error.response.data.message
        })
    }
}