/* 
When we have a large component tree and if we want to pass the state from top component to the 
bottom component of a component tree then we have prop drilling. Then we will see how we 
can solve this using the concept of context API and useContext hook.
*/
import React, { useState } from "react";
import { data } from "./names";

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople(() => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <section>
      <List people={people} removePerson={removePerson}></List>
    </section>
  );
};

const List = (props) => {
  const { people, removePerson } = props;
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          ></SinglePerson>
        );
      })}
    </>
  );
};

const SinglePerson = (props) => {
  const { id, name, removePerson } = props;
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
export default PropDrilling;

/* 
Here we can see that when we want to remove the particular name, then we need to pass the 
id of the name in the removePerson function. However, the id is only accessed to the 
SinglePerson Component. But the removePerson function is defined in the PropDrilling Componet.
Here, so we have to pass this function to the lower component. First we pass this function as
as property to the List component. Then we destructure the object and again pass this function
as a property from list to the SinglePerson Component. We can clearly see that the removePerson
function is declared in PropDrilling and is required by the SinglePerson Component and the List 
compoennt has no role in using the removeFunction. However, we cannot access the removePerson
function from the SinglePerson Component without passing this function as a property to the 
List Component. This concept of passing the property from upper component to the lower component
is known as PropDrilling. Here, we unnecessarily have to pass the function to the List Component.
If we have multiple Components in between the required Components, there is an extra overhead.
This problem is solved with the help of ContextAPI or useContext hooks.

*/
