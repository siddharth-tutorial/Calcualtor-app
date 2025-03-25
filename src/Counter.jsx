import React, { useState } from "react";
import Header from "./Header";
import './counter.css'

function Counter() {
 
  const [count, setcount] = useState(0);

  const count1 =()=>{
    setcount(count + 1);
    console.log(count)
}
const count2=()=>{
    if(count > 0){
    setcount(count - 1);
    }
    console.log(count)

}
  return (
    <div>
      <Header/>
      {/* PROJECT 1 COUNTER */}
      <div className="counter">
      <h1>Counter App</h1>
      <span className="counter-output">{count}</span>
      <div className="btn-container">
      <button className="control-btn" onClick={count1} value={count}>+</button>
      <button className="control-btn" onClick={count2} value={count}>-</button>
      </div>
      </div>
    </div>
  );
}

export default Counter;
