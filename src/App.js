import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import UserList from './pages/UserList/UserList';
import User from './pages/User/User';
import NewUser from './pages/NewUser/NewUser';
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
            <Route path='/user/new' element={<NewUser />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
