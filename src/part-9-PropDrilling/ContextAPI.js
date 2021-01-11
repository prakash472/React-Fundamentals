import React, { useState, useContext } from "react";
import { data } from "./names";

const PersonContext = React.createContext();
const ContextAPI = () => {
  /* 
  As soon as we create the context, we get access to two components,  Provider and consumer.
  With the arrival of useContext, we will not use the consumer. Previously before hook, consumer
  was used. Basically we will get Provider and Consumer components after creating context but use
  only Provider component.
  Provider= Distributor.
  
  Here we first find the return of the root component. After finding the root component, we 
  wrap the return of the root compnent with Provider i.e ContextName.Provider. It's beacause 
  for the Provider we have the value prop where we can pass the value and this value can be 
  accessed by using useContext hook. Here wherever, we want to use the context we use the 
  context hook and pass the context that we created.
  */
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople(() => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson }}>
      <section>
        <List people={people}></List>
      </section>
    </PersonContext.Provider>
  );
};

const List = (props) => {
  const { people } = props;
  const mainData = useContext(PersonContext);
  console.log(mainData); // Here mainData is the function of removePerson and here destructing is not done but rather the object itself is dsiplayed.
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person}></SinglePerson>;
      })}
    </>
  );
};

const SinglePerson = (props) => {
  const { id, name } = props;
  const { removePerson } = useContext(PersonContext);
  console.log(name);
  return (
    <>
      <div>
        <h3>{name}</h3>
        <button type="button" onClick={() => removePerson(id)}>
          Remove
        </button>
      </div>
    </>
  );
};

export default ContextAPI;

/* 
Here unlike the Prop Drilling, we do not require the pass the prop to all the components in a 
component tree. We just wrap the return of the root component wiht the ContextPropvder. and 
provide the prop that we could access in the lower component. When in the lower component,
when we want to retrive the porp than we just use the useContext hook. Here, midddle component
do not require to pass the property.

*/
