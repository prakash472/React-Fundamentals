import React, { useState, useEffect } from "react";

const useEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log("Inside UseEffect");

    /* 
  Here we will get multiple EventListener as we go on resizing the window. It 
  is because when we first render the page, useEffect function is rendered
  automatically so the window.addEventListener. Here ,when we have considering
  the state of the window size. When we first change the window, the EventListener
  will trigger the handler function checkSize. When we perform the checkSize function
  we use setSize() function. setSize() is the handler function of useState function.
  The handler function will rerender. Since we are rerendering, useEffect()
  funtion will work again and another eventListener is added. This leads to multiple
  eventListener and ultimately an poor management of memory of our website. To overcome
  that we have the concept of clean up function.
  */
    return () => {
      console.log("cleanup function");
      window.removeEventListener("resize", checkSize);
    };
    /* Here we add the cleanUp function so that the eventListener is not invoked multiple times
    as discussed above. What it basically does it Here, when we render a component, then we add 
    the eventListener. When we change the size of the window then, it changes the state of window 
    size which re renders the component. Before, when we rerender the useEffect() function was called
    but when the clean up function is used it is first invoked before the useEffect. Here, we 
    remove the eventListener. Then after executing this function it will execute the useEffect() function.
    Since the previous eventListener was removed we now add the newEventListener and ultimately we will have 
    only one eventListener instead of multiple eventListener.
    */

    /* 
    Instead of clean up function for above case we can also use useEffect=(()=>{window.addEventListener},[]).
    Here, [] denotes that useEffect will only render once and we will only have one eventListener. This is also possible
    However, it is possible here because we always have our component in screen. However, if we want to appear and disappear
    a component, clean up function practice is used 
    */
  });
  // Flow: Outside-->CleanUp-->Inside
  console.log("Outside useEffect inside Component");
  return (
    <div>
      <h2>Window Size</h2>
      <h3>{size} Px</h3>
    </div>
  );
};

// Best practice: Whenever we add a side Effect we add a clean up function to avoid some mess
export default useEffectCleanUp;
