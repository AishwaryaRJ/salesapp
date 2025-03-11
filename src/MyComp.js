import React, { useMemo, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log('Performing expensive calculation...');
    return count * 2; // Example of an expensive calculation
  }, [count]); // The calculation will run only if `count` changes

  return (
    <div>
      <p>Result of expensive calculation: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;