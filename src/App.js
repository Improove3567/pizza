import Header from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Nav from './components/navbar/Nav';
import Modal_basket from './components/modal_basket/Modal_basket';

const baseUrl = 'https://62697c31f2c0cdabac0f400a.mockapi.io/'
function App() {

  const [pizzas, setPizza] = useState([]);
  const [active, setActive] = useState(false)
  const [basketCard, setBasketCard] = useState([])
  const [card, setCard] = useState([])
  const handleSend = (pizza) =>{
      setCard([...card, pizza], console.log(card))
  }

  useEffect(() => {
    fetch(baseUrl + 'pizza')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPizza(data)

      })
  }, [])

  return (
    <BrowserRouter>
      <div className='App'>

        <Header basket={setCard} />
        <Nav active={active} setActive={setActive} card={card}/>
        <Routes>
          <Route path="/" element={<HomePage pizzas={pizzas} handleSend={handleSend}/>} />
        </Routes>

        {
          active ? <Modal_basket modal={active} setModal={setActive} card={card} /> : ''
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
