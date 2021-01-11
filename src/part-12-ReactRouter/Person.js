import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "./names";
/* 
Here when we use the useParams hook we will get the url parameters and the value associated
with that parameter in an object form. Here we need to destructure the object to get the 
associated url parameters.
Since we get the url parameters as an object the value we pass here id, is also taken as 
string. However, id in our data is not string but rather integer so we rather change the integer
to string.
*/

/* 
Here generally when working on projects when we pass the url parameters and get some id or 
reference, we will make another api call to fetch the relevant data. But since we have our 
data in local machine, we directly retrieve here.
*/
const Person = () => {
  const { id } = useParams();
  // console.log(useParams());
  const [name, setName] = useState("defaultName");
  useEffect(() => {
    const personName = data.find((person) => person.id === parseInt(id));
    setName(personName.name);
  }, [id]);
  return (
    <div>
      <h2>
        {name} {id}
      </h2>
      <Link to="/people">Back to People</Link>
    </div>
  );
};

export default Person;
