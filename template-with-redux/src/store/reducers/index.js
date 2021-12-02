import { GET_RESTAURANTS, RES_SUCCESS, RES_FAIL } from "../actions";

const initialState = {
  restaurants: [],
  error: "",
  loading: false,
};

export const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case RES_SUCCESS: {
      return {
        ...state,
        restaurants: [...action.payload],
        error: "",
        loading: false,
      };
    }
    case RES_FAIL: {
      return {
        ...state,
        restaurants: [],
        error: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
