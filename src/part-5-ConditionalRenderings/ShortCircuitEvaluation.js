import React, { useState } from "react";

/* 
 Inside the react JSX we cannot pass the expression or the condition, so display something 
 conditionally we will heavily use the concept of Short Circuit. In previous we saw that 
 we can have multiple returns. However, they were outside the return. We have not up till now
 use any method to use condition inside a single return. Let's see how we can set up condition with 
 the help of the Short Circuit inside the return   
 */

//const firstValue= text || "hello world" -------> if true first part is required result
//const secondValue= text && "hello word" -------> if true second part is required result
const ShortCircuitEvaluation = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  return (
    <div>
      <h1>{text || "John Doe"}</h1>
      <button type="submit" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      <h2>{isError && "Error...."}</h2>
      {isError ? (
        <p>There is a Error</p>
      ) : (
        <div>
          <h2>There is No error</h2>
        </div>
      )}
    </div>
  );
};

/* 
Here in the above program, at first we have text || (or) "John Doe". Initially our text value is 
empty(0) and "John Doe" is (1), the OR of 1 and 0 is 1 . So, we go with the right side i.e. "John Doe".
Likewise, when we some text like text="k". It means the OR operator will chose the first value or 
use "k" instead of "John Doe" or Second QUantity.

Here, when we peroform && condition. Then if the left side is correct, then we execute the right hand
side. left side correct(1) and right side (0): 1 && 0 = 0. So, we select second one.
Then if the left side is incorrect then it will execute the left side.

This cam be useful for showing and hiding of componets in React.
*/

export default ShortCircuitEvaluation;

/* 
The difference between ternary operator and && and || operator is that former allows us to give
two possible values but later will provide only one. In ternary operator we display sth if it is
true and another thing if it is not .
*/

/* Ternary Operator:
Here in ternary operator we can select the condtion for both false and true condition. It is written as
{expression? true part: false part}
Here if it is true executes first part else execute second part. It provides additional functionality 
say previously we had {expression && condition part}. Here for && we only execute the condition part if the 
expression is correct. No part if the expression is false. So, we have ternary operator.
*/
