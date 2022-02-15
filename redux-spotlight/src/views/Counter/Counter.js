import React from 'react';

const Counter = () => {
  // The function below is called a selector and allows us to select a value from
  // the state.

  return (
    <div>
      <button aria-label="Decrement value">-</button>
      <span>{}</span>
      <button aria-label="Increment value">+</button>
    </div>
  );
};

export default Counter;
