import { SET_AUTH, SET_LOGOUT } from "../actionTypes";

const initialStateBasket = {
  pending: false,
  data: JSON.parse(localStorage.getItem("auth")),
};

export const authReducer = (state = initialStateBasket, action) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, data: action.payload };
    case SET_LOGOUT:
      return { ...state, data: null };
    default:
      return state;
  }
};


