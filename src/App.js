import logo from './logo.svg';
import './App.css';
import { AttributeCard } from "./components/components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Sedans
        Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
        or on your next road trip.

        SUVs
        Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
        and off-road adventures.

        Luxury
        Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
        rental and arrive in style. */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <AttributeCard url="https://github.com/obasekiosa" name="obasekiosa" />
    </div>
  );
}

export default App;
