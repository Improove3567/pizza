import {
  SET_ALL_PIZZA,
  DELETE_PIZZA_BASKET,
  SET_PIZZA_BASKET,
  SET_AUTH,
  SET_LOGOUT,
} from "../actionTypes";
import Api from "../../api/Api";
//getPizzas
export let pizzaActionCreator = (res) => {
  return { type: SET_ALL_PIZZA, payload: res.data };
};

//basketReducer
export let setPizzaBasketActionCreator = (data) => {
  return { type: SET_PIZZA_BASKET, payload: data };
};

export let deletePizzaBasketActionCreator = (id) => {
  return { type: DELETE_PIZZA_BASKET, id: id };
};

//authReducer

export let setAuthActionCreator = (payload) => {
  return { type: SET_AUTH, payload };
};

export let logoutActionCreator = () => ({
  type: SET_LOGOUT,
});

export const getAllPizzaAC = () => {
  return (dispatch) => {
    Api.getAllPizza().then((res) => {
      dispatch(pizzaActionCreator(res));
    });
  };
};
