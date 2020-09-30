import Axios from "axios";
import "../Api/configAxios";
import { API_ROOT } from "../Api/configAxios";
import { LOGIN_ERROR, LOGIN_SUCCESS, LOG_OUT } from "../constant";

//////
export const login = (values) => async (dispatch) => {
  await Axios.post(`${API_ROOT}/api/login`, values)
    .then((res) => {
      localStorage.setItem("Token", JSON.stringify(res.data.token));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response.data,
      });
    });
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOG_OUT,
  });
};
