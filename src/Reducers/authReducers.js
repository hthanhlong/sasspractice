import { LOGIN_ERROR, LOGIN_SUCCESS, LOG_OUT } from "../constant";

const initialState = {
  isAuth: false,
};

export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isAuth: true,
        user: action.payload,
      };
    case LOGIN_ERROR:
      return {
        isAuth: false,
        error: action.payload,
      };
    case LOG_OUT:
      localStorage.removeItem("Token");
      return {
        isAuth: false,
        user: {},
        error: {},
      };
    default:
      return state;
  }
};
