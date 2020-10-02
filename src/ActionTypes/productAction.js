import Axios from "axios";
import "../Api/configAxios";
import { API_ROOT } from "../Api/configAxios";
import { FETCH_ERROR, FETCH_SUCCESS } from "../constant";

export const getProducts = (value) => async (dispatch) => {
  await Axios.get(`${API_ROOT}/products/?page=${value}&limit=16`)
    .then((res) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ERROR,
        payload: err.response.data,
      });
    });
};
