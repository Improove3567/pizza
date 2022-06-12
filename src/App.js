import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Nav from "./components/navbar/Nav";
import Modal_basket from "./components/modal_basket/Modal_basket";
import Admin from "./pages/Admin/Admin";
import DashBoard from "./pages/Dashboard/DashBoard";
import Api from "././api/Api";
import CreatePizza from "./pages/create_pizza/CreatePizza";
import {  useDispatch } from "react-redux";
import { PrivatRoute, PublicRoute} from './components/Routes/Routes'
import {getAllPizzaAC} from './redux/Actions/actions'

function App() {
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();

  const addNewPizza = (newPizza) => {
    console.log(newPizza);
    // TODO: rewrite to redux logic
    // setPizza([...pizzas, newPizza]);
  };



  useEffect(() => {
    dispatch( getAllPizzaAC())
  }, []);



  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav active={active} setActive={setActive} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/admin"
            element={
              <PublicRoute Component={Admin}/>
            }
          />

          <Route
            path="/dashboard"
            element={
              <PrivatRoute Component={ DashBoard }/>
            }
          />
          <Route path="/create-pizza" element={<CreatePizza />}></Route>
        </Routes>

        {active ? (
          <Modal_basket
            // price={pizzas.price}
            modal={active}
            setModal={setActive}
          />
        ) : (
          ""
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
