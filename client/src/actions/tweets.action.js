import {
    NEW_TWEET_REQUEST,
    NEW_TWEET_SUCCESS,
    NEW_TWEET_FAIL,
    NEW_TWEET_RESET,

    CLEAR_ERRORS,
} from '../constants/tweet.constant'


export const newTweet = (productData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_TWEET_REQUEST })

        const config = {
            headers:{
                'Content-Type' : 'application/json'
            }
        }

        const { data } = await axios.post(`/admin/product/new`, productData, config)

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