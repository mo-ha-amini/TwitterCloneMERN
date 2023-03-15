import { createStore , combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { authReducer } from './reducers/user.reducer'
import { newTweetReducer, FeedsTweetReducer } from './reducers/tweet.reducer'

const reducer = combineReducers({  

    auth: authReducer,

    newTweet: newTweetReducer,
    feedtweets: FeedsTweetReducer,
    
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