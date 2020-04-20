import React, { useState } from "react";

function Counter() {

  const[count, setCount] = useState(0);

  return (
    <div className = "Counter">
      <p>The counter is at : {count} </p>
      <button onClick={() => setCount(count + 1)}>>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>>
        -1
      </button>
      <input type='number' placeholder='Type the starting value' onChange={(event)=>setCount(Number(event.target.value))}></input>
    </div>
  );
}

export default Counter;