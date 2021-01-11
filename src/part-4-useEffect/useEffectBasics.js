import React, { useState, useEffect } from "react";

//by default runs after every re-render
// clean up function
// second parameter
// We can not run the useEffect inside the condition but the condition can be placed inside the useEffect

const useEffectBasics = () => {
  const [count, setCount] = useState(0);
  const increaseCounter = () => {
    setTimeout(() => {
      setCount((count) => {
        return count + 1;
      });
    }, 2000);
  };
  useEffect(() => {
    console.log("Inside useEffect");
    if (count >= 1) {
      document.title = `New Messages (${count})`;
    }
  }, [count]);
  /* 
  Here the second parameter in the useEffect is the dependency array. 
  If we only keep it empty or [] it will only render once, not everytime.
  However, we we place a dependent value in the dependency array, then 
  useEffect function will re-render every time that value is change. Here,
  if we pass [count], then useEffect will rerender every time the count changes.
   */
  console.log("Inside the component");

  return (
    <div>
      <h1>UseState Basics</h1>
      <h4>{count}</h4>
      <button type="button" onClick={increaseCounter}>
        Increase Counter
      </button>
    </div>
  );
};

export default useEffectBasics;
