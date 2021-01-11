import React, { useState } from "react";

const UseStateObjectExample = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 21,
    message: "Message from Peter",
  });
  /* const [name, setName] = useState("Peter");
  const [age, setAge] = useState(21);
  const [message, setMessage] = useState("Message From Peter"); */
  const changeMessage = () => {
    let newmessage = "New Message From Peter";
    // Here it is done with the help of the spread operator however, we can also do it with the help of setting many statevariable.
    // Here {} is used inside the setPerson Function because we are passing the object as a whole and object here requires {}
    setPerson({ ...person, message: newmessage });
    //setMessage(newmessage);   ----> Done with Multiple stateVariable
  };
  // console.log(person);
  return (
    <div style={{ marginLeft: 100, marginTop: 50 }}>
      <h2>This is Information </h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      {/* Here we are using the multiple useState values instead of only one object
      <h3>{message}</h3>  */}
      <button type="button" onClick={changeMessage}>
        Change Message
      </button>
    </div>
  );
};

export default UseStateObjectExample;
