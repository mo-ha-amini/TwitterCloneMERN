import axios from 'axios'

import {
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    FOLLOW_FAIL,
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