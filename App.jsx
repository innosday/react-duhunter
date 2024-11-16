import { useState } from "react";
import "./App.css";
import Holes from "./components/holes";

function App() {
  const holes = [0,0,0,0,0,0,0,0,0];
  let score = 0;
  let time = 60;
  let [started,setstarted] = useState(false);
  let [randnum,setrandnum] = useState(0);
  function start() {
    if(started) return;
    setstarted(true);
    console.log('시작');
    setInterval(()=> {
      setrandnum(Math.floor(Math.random() * 9) + 1)
    },1000);
    
  }

  return (
    <>
      <div>
        <span id="timer">0</span>초&nbsp;
        <span id="score">0</span>점<button id="start" onClick={start}>시작</button>
      </div>
      <div id="game">
        <Holes num={randnum}/>
      </div>
    </>
  );
}

export default App;
