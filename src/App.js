import logo from './logo.svg';
import React, { useCallback, useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import MyComponent from './MyComp';
function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // The callback will change only if `count` changes
  return (
    <div className="App">
     <Dashboard />
     <button onClick={handleClick}>Count: {count}</button>
     <MyComponent />
    </div>
  );
}

export default App;
