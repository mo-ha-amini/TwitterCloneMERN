import {
    NEW_TWEET_REQUEST,
    NEW_TWEET_SUCCESS,
    NEW_TWEET_FAIL,
    NEW_TWEET_RESET,

    CLEAR_ERRORS,
} from '../constants/tweet.constant'

export const newTweetReducer = (state = { product: {} }, action) => {
    switch (action.type) {

        case NEW_TWEET_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_TWEET_SUCCESS:
            return {
                loading: false,
                product: action.payload.product
            }

        case NEW_TWEET_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_TWEET_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}