import axios from "axios";

export const GET_RESTAURANTS = "GET_RESTAURANTS";
export const RES_SUCCESS = "RES_SUCCESS";
export const RES_FAIL = "RES_FAIL";

export const getRestaurants = () => (dispatch) => {
  dispatch({ type: GET_RESTAURANTS });
  axios
    .get("https://s3.amazonaws.com/br-codingexams/restaurants.json")
    .then((res) => {
      dispatch({ type: RES_SUCCESS, payload: res.data.restaurants });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: RES_FAIL, payload: err });
    });
};
