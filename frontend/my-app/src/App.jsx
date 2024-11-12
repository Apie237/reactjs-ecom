import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShopContextProvider } from './Contexts/ShopContext';
import Navbar from './Components/Navbar/Navbar';
import { ShopCategory } from './Pages/ShopCategory';
import { LoginSignup } from './Pages/LoginSignup';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import women_banner from './Components/Assets/women-banner.jpg';
import men_banner from './Components/Assets/men-banner.jpg';
import kids_banner from './Components/Assets/kids-banner.jpg';
import { Shop } from './Pages/Shop';

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory category="men" banner={men_banner} />} />
          <Route path='/women' element={<ShopCategory category="women" banner={women_banner} />} />
          <Route path='/kids' element={<ShopCategory category="kids" banner={kids_banner} />} />
          <Route path='/product'>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
