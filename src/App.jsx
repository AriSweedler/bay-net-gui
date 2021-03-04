import React, { useState, useEffect } from 'react';

const App = () => {
  // Create the count state.
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(increment, 1000);
    const clear_timer_lambda = () => clearTimeout(timer);
    return clear_timer_lambda;
  }, [count, setCount]);

  // Return the App component.
  return (
    <h1>Page has been open for <code>{count}</code> seconds.</h1>
  );
}

export default App;