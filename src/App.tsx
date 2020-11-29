import React from 'react';
import Board from './components/Board/Board';

import './App.css';

const board = [
  // Box 1
  { digit: 7, given: true, active: false }, 
  { digit: 1, given: true, active: false }, 
  { digit: 5, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: 4, given: true, active: false }, 
  { digit: 2, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: 6, given: true, active: false }, 

  // Box 2
  { digit: 9, given: true, active: false }, 
  { digit: 2, given: true, active: false }, 
  { digit: 4, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: 7, given: true, active: false }, 

  // Box 3
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: 7, given: true, active: false }, 
  { digit: 2, given: true, active: false }, 
  { digit: 1, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: 9, given: true, active: false }, 

  // Box 4
  { digit: null, given: false, active: false }, 
  { digit: 9, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: 2, given: true, active: false }, 
  { digit: 7, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: 4, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 

  // Box 5
  { digit: 4, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: 6, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: 5, given: true, active: false }, 
  { digit: 7, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 

  // Box 6
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: 2, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: 6, given: true, active: false }, 
  { digit: 8, given: true, active: false }, 
  { digit: 1, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 

  // Box 7
  { digit: 3, given: true, active: false }, 
  { digit: 4, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: 9, given: true, active: false }, 
  { digit: 5, given: true, active: false }, 
  { digit: null, given: false, active: false }, 

  // Box 8
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: 3, given: true, active: false }, 
  { digit: 8, given: true, active: false }, 
  { digit: 2, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: 7, given: true, active: false }, 
  { digit: null, given: false, active: false }, 

  // Box 9
  { digit: null, given: false, active: false }, 
  { digit: 6, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: 5, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: null, given: false, active: false }, 
  { digit: 8, given: true, active: false }, 
  { digit: 3, given: true, active: false }, 
  { digit: null, given: false, active: false }, 
]

function App() {
  return (
    <div>
      <Board initialBoard={ board }/>
    </div>
  );
}

export default App;
