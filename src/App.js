import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='App-container'>
        <Sidebar />
        <div className='others'>other pages</div>
      </div>
    </div>
  );
}

export default App;
