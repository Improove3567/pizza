import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Nav from "./components/navbar/Nav";
import Modal_basket from "./components/modal_basket/Modal_basket";
import OrderModal from "./components/orderModal/OrderModal";
import ModalConfirmation from "./components/ModalConfirmation/ModalConfirmation";
import Admin from './pages/Admin/Admin'
import DashBoard from "./pages/Dashboard/DashBoard";

const baseUrl = "https://62697c31f2c0cdabac0f400a.mockapi.io/";
function App() {
  const [pizzas, setPizza] = useState([]);
  const [active, setActive] = useState(false);
  const [basketCard, setBasketCard] = useState([]);
  const [card, setCard] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  console.log(card);
  const [isInArray, setIsInArray] = useState(false);

  const handleSend = (pizza) => {
    setCard([...card, pizza]);
  };

  const removeCardBasket = (itemId) => {
    card.forEach((el) => {
      if (el.id === itemId) {
        setIsInArray(true);
      }
    });
    // if (!isInArray) {
    const items = card.filter((item) => item.id !== itemId);
    setCard(items);
    // }
  };

  useEffect(() => {
    fetch(baseUrl + "pizza")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPizza(data);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(card));
  }, [card]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header basket={setCard} />
        <Nav active={active} setActive={setActive} card={card} />
        <Routes>
          <Route
            path="/"
            element={<HomePage pizzas={pizzas} handleSend={handleSend} />}
          />
          <Route path='/admin' element={<Admin />} />
          <Route path='/dashboard' element={<DashBoard pizzas={pizzas}/>} />
        </Routes>

        {active ? (
          <Modal_basket
            price={pizzas.price}
            modal={active}
            setModal={setActive}
            card={card}
            removeCardBasket={removeCardBasket}
          />
        ) : (
          ""
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
