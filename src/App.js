import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import Products from './components/pages/Products/Products';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import NotFound from './components/pages/NotFound.js';

function App() {
  return (
    <div Name="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<ItemListContainer />}></Route>
      <Route path="/item" element={<ItemDetailContainer />}></Route>
      <Route path="/format/:catId"></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Products" element={<Products />}></Route>
      <Route path="/item/detail/:id" element={<ItemDetail />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;