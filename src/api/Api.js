import { configure, queryByDisplayValue } from "@testing-library/react";
import axios from "axios";
const baseUrl = "http://solid.lol/";
const mockapiBaseUrl = "https://62697c31f2c0cdabac0f400a.mockapi.io/"

const api = axios.create({
  baseURL: baseUrl,
});

api.interceptors.request.use((config) =>{
  config.headers = {
    "token": JSON.parse(localStorage.getItem("auth"))?.token || ""
  }
  return config
})

const Api = {
    createPizza: (data) => api.post("add/pizza", data),
    getAllPizza: () => api.get("pizza"),
    deletePizza: (id) => api.delete("delete/pizza/" + id),
    auth: (login, password) => api.post('/admin', login, password)
};



export default Api;
