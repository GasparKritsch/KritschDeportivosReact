import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import CarritoPage from './components/CarritoPage';

function App() {
  return (
    <CartContextProvider>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/KritschDeportivosReact/" element={<ItemListContainer />}/>
          <Route path="/KritschDeportivosReact/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/KritschDeportivosReact/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/KritschDeportivosReact/carrito" element={<CarritoPage />} />
        </Routes>
      </HashRouter>
    </CartContextProvider>
  );
}

export default App;
