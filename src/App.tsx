import { useState } from 'react';
import './App.css';

function App() {
  const [countUp, setCountUp] = useState(0);
  const [countDown, setCountDown] = useState(0);

  return (
    <>
      <div className="row">
        <div className="column">
          <div>Up counter = {countUp}</div>
          <button onClick={() => setCountUp((countUp) => countUp + 1)}>
            +1
          </button>
        </div>
        <div className="column">
          <div>Down counter = {countDown}</div>
          <button onClick={() => setCountDown((countDown) => countDown - 1)}>
            -1
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
