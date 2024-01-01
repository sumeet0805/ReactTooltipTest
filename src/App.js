import styled from 'styled-components';
import './App.css';
import { useState } from 'react';
import {Tooltip,TooltipTarget} from './components/ttip';


function App() {

  const [position,setPosition]=useState("left");

  const Select=styled.select
  `padding:10px;
  margin:100px 0;
  border-radius:5px;
  width:200px;
  font-size:1.25rem;
  `;

  return (
    <div className="App">
      <Select name="Tooltipselector" value={position} onChange={(e)=>setPosition(e.target.value)}>
            <option value="left">Left</option>
            <option value="top">Top</option>
            <option value="right">Right</option>
            <option value="bottom">Bottom</option>
      </Select>
      <Tooltip position={position}>
        <TooltipTarget>Hover Over Me</TooltipTarget>
      </Tooltip>
    </div>
  );
}

export default App;
