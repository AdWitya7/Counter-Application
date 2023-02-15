import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let counterClass = '';
  if (count < 5) {
    counterClass = 'green';
  } else if (count < 10) {
    counterClass = 'blue';
  } else {
    counterClass = 'red';
  }

  return (
    <div className="App">
      <h1 className={counterClass}>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default App;
