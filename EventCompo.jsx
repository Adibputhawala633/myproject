import React, { useState } from "react";

export default function EventsCompo() {
  const [state, setState] = useState(0);
   const increment = () => {
     console.log("called");
     setState(state + 1);
   };
  const decrement = ()=>{
      console.log("called");
      setState(state-1)
    }
  return (
    <div>
      EventsCompo &nbsp;
      <button className="btn btn-danger btn-lg" onClick={decrement}>-</button>
      &nbsp;{state}&nbsp;
      <button className="btn btn-success btn-lg" onClick={increment}>+</button>
      
        
      </div>
    
  );
}