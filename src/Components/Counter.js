import React from "react";
import { useState } from "react";



function Counter() {
    const [count, SetCount] = useState(0)
    return (
      <div style={{display: "flex", justifyContent: "center", gap: '1rem', alignItems: 'center'}}>
       <button style={{width : '3rem',height: '1.5rem'}} onClick={() => {
        SetCount(count-1)
       }}>-</button>
        <h2>{count}</h2>
        <button style={{width : '3rem', height: '1.5rem'}} onClick={() => {
        SetCount(count+1)
       }}>+</button>
      </div>
    );
  }

export default Counter;