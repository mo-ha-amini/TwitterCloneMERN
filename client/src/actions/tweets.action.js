import axios from 'axios'

import {
    NEW_TWEET_REQUEST,
    NEW_TWEET_SUCCESS,
    NEW_TWEET_FAIL,
    FEED_TWEETS_REQUEST,
    FEED_TWEETS_SUCCESS,
    FEED_TWEETS_FAIL,
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

        dispatch({ type: FEED_TWEETS_REQUEST })

        // const config = {
        //     headers:{
        //         'Content-Type' : 'application/json'
        //     }
        // }

        const { data } = await axios.get(`/feed`)

        dispatch({ 
            type: FEED_TWEETS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: FEED_TWEETS_FAIL,
            payload: error.response.data.message
        })
    }
}