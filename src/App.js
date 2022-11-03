import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import CarritoPage from './components/CarritoPage';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/KritschDeportivosReact/" element={<ItemListContainer />}/>
          <Route path="/KritschDeportivosReact/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/KritschDeportivosReact/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/KritschDeportivosReact/carrito" element={<CarritoPage />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
