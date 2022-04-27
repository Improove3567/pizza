import Header from './components/header/Header'
import Order from './components/order/Order'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Order />

        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
