import React from 'react';
import { useState } from 'react';
import './Tictectoe.css';

function Square(){
 const[value,setvalue] = useState(null);

  function handleClick(){
    setvalue("X");
  }
  return <button className="square" onClick={handleClick}>{value}</button>
}
function Tictactoe  ()  {
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        </div>
        <div className="board-row">
        <Square />
        <Square />
        <Square />
        </div>
        <div className="board-row">
        <Square />
        <Square />
        <Square />
        </div>
    </div>
  )
};
export default Tictactoe;

