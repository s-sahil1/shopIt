import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import MainArea from './MainArea/MainArea';
import Cart from './Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fCart } from './MainArea/MainArea';

function App() {

  const createCart = (item)=>{
    
  }
  return (

    <div className="App">
      {/* <Header />
    <MainArea /> */}
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<>
            <Header />
            <MainArea final={createCart}/>
          </>} />

          <Route path='/cart' element={<>
            <Header />
            <Cart fCart = {fCart}/>
          </>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
