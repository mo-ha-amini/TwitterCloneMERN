import {
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  FOLLOW_FAIL,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAIL,
  CLEAR_ERRORS,
} from "../constants/profile.constant";

export const followReducer = (state = { profile: {} }, action) => {
    switch (action.type) {
      case FOLLOW_REQUEST:
      case UNFOLLOW_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
        };
  
      case FOLLOW_SUCCESS:
      case UNFOLLOW_SUCCESS:
        return {
          ...state,
          loading: false,
          profile: action.payload.profile,
          success: true,
        };
  
      case FOLLOW_FAIL:
      case UNFOLLOW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
          success: false,
          profile: null,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return {
          ...state,
        };
    }
  };