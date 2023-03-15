import { createStore , combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { authReducer } from './reducers/user.reducer'
<<<<<<< HEAD
import { newTweetReducer, FeedsTweetReducer } from './reducers/tweet.reducer'
=======
import { newTweetReducer,feedTweetsReducer } from './reducers/tweet.reducer'
>>>>>>> fixfeed

const reducer = combineReducers({  

    auth: authReducer,

    newTweet: newTweetReducer,
<<<<<<< HEAD
    feedtweets: FeedsTweetReducer,
=======
    feedTweets: feedTweetsReducer,
>>>>>>> fixfeed
    
})
 
// let initialState ={
//     cart:{
//         cartItems : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
//         shippingInfo: localStorage.getItem('shippingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {}
//     }
// }

const middleware =[thunk] 

const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))

export default store;