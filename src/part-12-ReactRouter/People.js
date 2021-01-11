import React from "react";
import { data } from "./names";
import { Link } from "react-router-dom";
const People = () => {
  return (
    <section>
      <h2>People</h2>
      {data.map((person) => {
        return (
          <div key={person.id}>
            <h3>{person.name}</h3>
            <Link to={`/person/${person.id}`}>Learn More</Link>
          </div>
        );
      })}
    </section>
  );
};

export default People;
