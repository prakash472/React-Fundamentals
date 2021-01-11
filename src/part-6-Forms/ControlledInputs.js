import React, { useState } from "react";
// In control Inputs we will be hooking our input values with our state value

/*  
const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello world");
  };
 Here the form is setup but we now have to link the input of form with the state value
  */

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // We can also set these fields of the form into a single object and a final list which contains these objects.
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const person = {
        id: new Date().getTime().toString(),
        name: name,
        email: email,
      };
      setPeople((people) => {
        return [...people, person];
      });
      setName("");
      setEmail("");
    } else {
      console.log("empty inputs");
    }
  };
  return (
    <div>
      {/* 
        We can submit the form through the submit button or directly in the from itself with the help
        of onSubmit method. Here, we can pass the handler function. By default, the onSubmit submits
        our form so we have to stop it from submitting before we can hook these values with state value.
        We can do that with the help of catching the hadler object and setting the preventDefault to false.
        */}
      {/* <form onSubmit={handleSubmit}> --> Using submit in form itself*/}
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>
        <button type="submit" onClick={handleSubmit}>
          Add Person
        </button>
      </form>
      {people.map((person) => {
        const { id, name, email } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <h3>{email}</h3>
          </div>
        );
      })}
    </div>
  );
};
/* 
Here in order to link the input of form with the state value, we have to provide the value in 
the form with the help of the state variable. When providing the value in the input field we 
have linked the form values with the state values. However, it will only have the values of the 
state variable but will not take the input from the user. For that we have to add the onChange
method. Here in the onChange method we will have access the event object and we will get the
value of the target using this event object and finally use the setName or handler method of the 
useState to set the the value of the useState variable.


*/
// In controlled inputs we will have a value that represents a state variable and the onChange function
// to represent the state of that varaible.
export default ControlledInputs;
