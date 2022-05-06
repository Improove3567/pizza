import Header from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Nav from './components/navbar/Nav';

const baseUrl='https://62697c31f2c0cdabac0f400a.mockapi.io/'
function App() {

  const [pizzas, setPizza] = useState([]);
  


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
        <Header />
          <Nav />
        <Routes>
          <Route path="/" element={<HomePage pizzas={pizzas}/>} />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
