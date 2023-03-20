import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAIL,
  FIND_USERNAME_REQUEST,
  FIND_USERNAME_SUCCESS,
  FIND_USERNAME_FAIL,
  FIND_PROFILEBYID_REQUEST,
  FIND_PROFILEBYID_SUCCESS,
  FIND_PROFILEBYID_FAIL,
  CLEAR_ERRORS,
} from "../constants/user.constant";

export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case LOAD_USER_REQUEST:
    case LOGOUT_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        user: null,
      };

    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        // error: action.payload
      };

    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOGOUT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const searchUserReducer = (state = { users: {} }, action) => {
  switch (action.type) {
    case SEARCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        count: action.payload.count,
        users: action.payload.users,
        success: true,
      };

    case SEARCH_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
        users: null,
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

export const findByUsernamereducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case FIND_USERNAME_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case FIND_USERNAME_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload.profile,
        success: true,
      };

    case FIND_USERNAME_FAIL:
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

export const findProfileByIdReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case FIND_PROFILEBYID_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
      };

    case FIND_PROFILEBYID_SUCCESS:
      return {
        ...state,
        loading: false,
        authprofile: action.payload.profile,
        success: true,
      };

    case FIND_PROFILEBYID_FAIL:
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
