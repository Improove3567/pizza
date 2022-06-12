import { SET_ALL_PIZZA } from "../actionTypes";

const initialState = {
  pending: true,
  data: JSON.parse(localStorage.getItem("pizzas")) || [],
};
export const pizzaReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case SET_ALL_PIZZA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};


