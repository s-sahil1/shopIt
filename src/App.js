import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import MainArea from './MainArea/MainArea';
import Cart from './Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <div className="App">
      {/* <Header />
    <MainArea /> */}
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<>
            <Header />
            <MainArea />
          </>} />

          <Route path='/cart' element={<>
            <Header />
            <Cart />
          </>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
