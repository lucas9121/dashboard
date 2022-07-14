import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='App-container'>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
