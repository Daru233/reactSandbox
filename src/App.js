import './App.css';
import Clicker from './Clicker/Clicker';
import GetRequest from './httpRequests/getRequest';
import Header from './Header/Header.js';
import NameObj from './useStateObj/nameObj';
import UseStateArray from './useStateArray/useStateArray';
import MouseContainer from './mousePosition/mouseContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <MouseContainer />
      <UseStateArray />
      <NameObj />
      <Clicker />
      <GetRequest />
    </div>
  );
}

export default App;
