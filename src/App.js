import './App.css';
import Clicker from './Clicker/Clicker';
import GetRequest from './httpRequests/getRequest';
import Header from './Header/Header.js';
import NameObj from './useStateObj/nameObj';

function App() {
  return (
    <div className="App">
      <Header />
      <NameObj />
      <Clicker />
      <GetRequest />
    </div>
  );
}

export default App;
