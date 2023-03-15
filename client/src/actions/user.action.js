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
    LOGOUT_REQUEST ,
    LOGOUT_SUCCESS ,
    LOGOUT_FAIL,

    CLEAR_ERRORS
} from '../constants/user.constant'

export const register = (userData)=> async (dispatch)=>{
    try{
        dispatch({ type:REGISTER_REQUEST })

        const config ={
            headers:{
                'Content-Type':'application/json'
            }
        }
        
        console.log('heelo')
        console.log(userData)

        const {data} = await axios.post('/register', userData, config)
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

export const login = (userData)=> async (dispatch)=>{
    try{
        dispatch({ type:LOGIN_REQUEST })

        const config ={
            headers:{
                'Content-Type':'application/json'
            }
        }
        
        const {data} = await axios.post('/login',userData,config)

        dispatch({
            type:LOGIN_SUCCESS,
            payload:data.user
        })

    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            // payload:error.response.data.message
        })
    }
}

export const loadUser = () => async (dispatch)=>{
    try{
        dispatch({ type:LOAD_USER_REQUEST })
        
        const { data } = await axios.get('/user')
        // console.log(data.user.results[0])

        dispatch({
            type:LOAD_USER_SUCCESS,
            payload:data.user.results[0]
        })

    } catch (error) {
        dispatch({
            type:LOAD_USER_FAIL,
            payload:error.response.data.message
        })
    }
}

export const logoutUser = () => async (dispatch)=>{
    try{
        dispatch({ type:LOGOUT_REQUEST })
        
        const { data } = await axios.get('/logout')


        dispatch({
            type:LOGOUT_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type:LOGOUT_FAIL,
            payload:error.response.data.message
        })
    }
}

export const cleanErrors = ()=> async (dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS,
    })
}