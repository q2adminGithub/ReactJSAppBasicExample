import './App.css';

// frontend/src/App.js
import React, { useState } from 'react';
import { API_URL } from './config';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const calculateSquare = async () => {
    try {
      const response = await fetch(`${API_URL}/square?x=${parseFloat(input)}`,{
      method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log("The result of fetch in the front end is:",response);
      const result = await response.json();

      setResult(result);
    } catch (error) {
      console.error('Error during fetch:', error.message);
    }
  };
  console.log("The parsed input in the frontend is: ", parseFloat(input));
  console.log("The result is: ", result);
  return (
    <div>
      <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={calculateSquare}>Calculate Square</button>
      {result && <p>Result: {result}</p>}
    </div>
    
  );
};

export default App;