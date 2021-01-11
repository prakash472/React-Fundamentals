/* 
Here if we have multiple input fields in our form. Then it can be tedious to keep the state 
variable and maintain the state variable. For that we can use the concept of Multiple Input 
*/
// It would be nice to have 1 value in state instead of all the input fields. and one function
// responsible for onChange regardless which input we type on.
// Use the concept of dynamic object properties
import React, { useState } from "react";

const MultipleInputs = () => {
  // Here we setup a object of the fields of the inputs
  const [person, setPerson] = useState({ name: "", email: "", age: "" });
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.age && person.email) {
      /*  Here using the spread operator we have the newPerson object which consists of the 
        person object with name,email and age and we add id field if not present or update if
        already present with the id. Then we set the people list with newPerson Object. After
        it is stored in people we emptied the person so that our input state values are reset 
        */
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ name: "", email: "", age: "" });
    } else {
      console.log("empty inputs");
    }
  };
  const handleChange = (e) => {
    /*  Here instead of many functions like setName(), setAge() we can use a single handleChange Function
     */
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={person.name}
          onChange={handleChange}
        ></input>
        <br></br>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={person.email}
          onChange={handleChange}
        ></input>
        <br></br>
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          name="age"
          value={person.age}
          onChange={handleChange}
        ></input>
        <br></br>
        <button type="submit" onClick={handleSubmit}>
          Add Person
        </button>
      </form>
      {people.map((person) => {
        const { id, name, email, age } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h3>{age}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default MultipleInputs;
