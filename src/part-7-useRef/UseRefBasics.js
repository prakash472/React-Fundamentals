/* Previously we saw how we handled the multiple inputs by connecting the form variables with the 
state variables. useRef hook is used to target the specific elements */

// It works a lot like useState.
// preserves the value
// DOES NOT trigger re-render
// target DOM nodes/elements

import React, { useRef, useEffect } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value); // Returns the current value of the input field.
    console.log(refContainer.current);
  };
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" ref={refContainer}></input>
          <button type="submit">Submit</button>
        </div>
        <div ref={divContainer}>Div Container</div>
      </form>
    </>
  );
};

export default UseRefBasics;

/* 
Here while using the useRef hook, we invoke the useRef function and assisgn it to
the value(refContainer) and we now add a attribute in the dome nodes/element which we 
want to access. Here, it is the input element of the form. We assign it to the value of the useRef
to the ref attribute of the element we want as a reference. This useRef returns an object with the property
current. Here current property will the hold the value of the current of the input. Here current is the input.
We can grab its value as current.value
*/

/* 
Here one useCase of useRef is that we can directly focus the input 
to the name or a field the moment we the app is render. Here when we 
can use the useEffect. Since useRef does not rerender the component we 
do not have to worry about dependency array as in case of useState.
*/
