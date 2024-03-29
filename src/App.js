import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import UserList from './pages/UserList/UserList';
import User from './pages/User/User';
import NewUser from './pages/NewUser/NewUser';
import ProductList from './pages/productList/productList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import './App.css';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <main>
      <Header />
      <div className='App-container'>
        <Sidebar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/user/:userId' element={<User/>} />
            <Route path='/newUser' element={<NewUser />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/product/:productId' element={<Product/>} />
            <Route path='/newProduct' element={<NewProduct/>} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
