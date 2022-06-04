import './App.css';
import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>{counter}</h1> 
      <button onClick={() => setCounter((Count) => Count + 1)}>+</button>
      <button onClick={() => setCounter(0)}>Clear</button>
      <button onClick={() => setCounter((Count) => Count - 1)}>-</button>
    </div>
  );
}

export default App;
