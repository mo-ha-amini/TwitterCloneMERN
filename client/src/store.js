import { createStore , combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { authReducer , searchUserReducer, findByUsernamereducer, findProfileByIdReducer} from './reducers/user.reducer'
import { newTweetReducer,feedTweetsReducer } from './reducers/tweet.reducer'
import { followReducer } from './reducers/profile.reducer'

const reducer = combineReducers({  

    auth: authReducer, 

    searchUser:searchUserReducer,
    findByUsername:findByUsernamereducer,
    findProfileById:findProfileByIdReducer,

    newTweet: newTweetReducer,
    feedTweets: feedTweetsReducer,

    follow : followReducer,
    
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