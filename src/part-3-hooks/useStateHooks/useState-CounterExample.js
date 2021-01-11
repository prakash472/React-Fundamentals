import React, { useState } from "react";

/* 
Here in case of the passing the value directly on the handler function of our useState, we pass the old value 
that is previously declared. But when we click the counter, while passsing the value, it will take the count 
value of the initial one and increase it by 1. It will take the previous state value not the current state value
for that we need to use the functional approach as:
setCount((prevState)=>{
    return count+1 (newState)
})
After that it will consider the newState
*/
const UseStateCounterExample = () => {
  const [count, setCount] = useState(0);
  const decreaseCounter = () => {
    setCount(count - 1);
  };
  const increaseWithDelay = () => {
    console.log(count);
    setTimeout(() => {
      setCount((count) => {
        return count + 1;
      });
    }, 2000);
  };
  return (
    <>
      <div>
        <h1>Simple Counter Example </h1>
        <h3>{count}</h3>
        <button type="button" onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button type="button" onClick={decreaseCounter}>
          Decrease
        </button>
        <button
          type="button"
          onClick={() => {
            return setCount(0);
          }}
        >
          Reset
        </button>
      </div>
      <div>
        <h4>
          Complex Counter Example (Using Pause- Doesn't update according to
          current Value)
        </h4>
        <h3>{count}</h3>
        <button type="submit" onClick={increaseWithDelay}>
          Increase(Pause 2ms)
        </button>
      </div>
    </>
  );
};

export default UseStateCounterExample;
