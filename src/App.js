import './App.css';
import Clicker from './Clicker/Clicker';
import GetRequest from './httpRequests/getRequest';
import Header from './Header/Header.js';
import NameObj from './useStateObj/nameObj';
import UseStateArray from './useStateArray/useStateArray';
import MousePosition from './mousePosition/mousePosition';

function App() {
  return (
    <div className="App">
      <Header />
      <MousePosition />
      <UseStateArray />
      <NameObj />
      <Clicker />
      <GetRequest />
    </div>
  );
}

export default App;
