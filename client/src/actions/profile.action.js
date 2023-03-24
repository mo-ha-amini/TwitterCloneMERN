import axios from 'axios'

import {
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    FOLLOW_FAIL,
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS,
    UNFOLLOW_FAIL,
    CLEAR_ERRORS,
  } from "../constants/profile.constant";

export const follow = (userId) => async(dispatch)=>{
    try {
        dispatch({ type: FOLLOW_REQUEST });
    
        const { data } = await axios.post(`/follow/${userId}`);
    
        dispatch({
          type: FOLLOW_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: FOLLOW_FAIL,
          payload: error.response.data.message,
        });
      }
  }

export const unFollow = (userId) => async(dispatch)=>{
  try {
      dispatch({ type: UNFOLLOW_REQUEST });
  
      const { data } = await axios.delete(`/follow/${userId}`);
  
      dispatch({
        type: UNFOLLOW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UNFOLLOW_FAIL,
        payload: error.response.data.message,
      });
    }
}
