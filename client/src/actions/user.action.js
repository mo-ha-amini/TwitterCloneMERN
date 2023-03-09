import axios from 'axios'
import {
    LOGIN_REQUEST ,
    LOGIN_SUCCESS ,
    LOGIN_FAIL,
    REGISTER_REQUEST ,
    REGISTER_SUCCESS ,
    REGISTER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,

    CLEAR_ERRORS
} from '../constants/user.constant'

export const register = (userData)=> async (dispatch)=>{
    try{
        dispatch({ type:REGISTER_REQUEST })

        const config ={
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }
        
        
        const {data} = await axios.post('/register',userData,config)
        console.log(data)
        dispatch({
            type:REGISTER_SUCCESS,
            payload:data.user
        })

    } catch (error) {
        dispatch({
            type:REGISTER_FAIL,
            payload:error.response.data.message
        })
    }
}

// export const loadUser = ()=> async (dispatch)=>{
//     try{
//         dispatch({ type:LOAD_USER_REQUEST })
        
//         const {data} = await axios.get('/')

//         dispatch({
//             type:LOAD_USER_SUCCESS,
//             payload:data.user
//         })

//     } catch (error) {
//         dispatch({
//             type:LOAD_USER_FAIL,
//             payload:error.response.data.message
//         })
//     }
// }

export const cleanErrors = ()=> async (dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS,
    })
}