// Here useState is a function and unlike React it is a named export. So, it is must to name it accordingly.
import React, { useState } from "react";

/* // Let's first check for the error and why we need useStates? Here when we click on onClick then 
the we move to the function changeName. But since there is no way to rerender that changes on our
webpage, the changes are not seen for these purpose we require the concept of useState
Following program shows why we need the use of useState

const UseStateError = () => {
  let name = "First Name: Prakash";
  const changeName = () => {
    name = "Last Name: Parajuli ";
    console.log(name);
  };
  return (
    <React.Fragment>
      <h1>{name}</h1>
      <button type="button" onClick={changeName}>
        Change Name
      </button>
    </React.Fragment>
  );
};
export default UseStateError;
 */

const UseStateExample = () => {
  let f_name = "First Name: Prakash";
  const [name, setName] = useState(f_name);
  const changeName = () => {
    let l_name = "Last Name: Parajuli";
    if (name === f_name) {
      setName(l_name);
    } else {
      setName(f_name);
    }
  };
  return (
    <React.Fragment>
      <h1>{name}</h1>
      <button type="button" onClick={changeName}>
        Change Name
      </button>
    </React.Fragment>
  );
};
export default UseStateExample;

// These are the basics of the useState hooks in React. All the hooks will start with the use like useStates, useEffects, useCallbacks

/*
Rules of Hooks
- start with use 
- component name must be uppercase
- must be in the function/componet body. It means the useStates can not be defined outside the component.
- can not call conditionally. It means they can not be called using the conditional statements like if-- else.
 */
