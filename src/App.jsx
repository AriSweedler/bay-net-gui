import React, { useState, useEffect } from 'react';

/*
The App is:
__________________________________________________
| a control panel (create new node, import, etc) |
__________________________________________________
| viewport into a graph                          |
|                                                |
|                                                |
|                                                |
|                                                |
|                                                |
__________________________________________________

The control panel is simple, just a set of buttons exposing functions for the engine
The vieweport will be complicated...
* Can I use a library to get a clickable draggable object into view?
* Some good graph builder. Never raelly likd what I've seen, need research.
*/

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