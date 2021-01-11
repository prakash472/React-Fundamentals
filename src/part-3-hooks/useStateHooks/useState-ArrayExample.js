// The useState is a function which consists of two parts, the first part is the default value
// and the second part is the handler, which handles the state or change the value of the default when
// the handler is called

import React, { useState } from "react";
import { data } from "./names";

const UseStateArrayExample = () => {
  const [names, setNames] = useState(data);
  const removeItem = (id) => {
    let newPeople = names.filter((person) => person.id !== id);
    setNames(newPeople);
  };
  const clickHandler = () => {
    setNames([]);
  };
  return (
    <React.Fragment>
      {names.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} style={{ height: 50 }}>
            <h4>{name}</h4>
            <button
              type="submit"
              style={{ float: "right" }}
              onClick={() => {
                removeItem(id);
              }}
            >
              Clear {name}
            </button>
          </div>
        );
      })}
      <button type="button" style={{ margin: 10 }} onClick={clickHandler}>
        Clear All
      </button>
    </React.Fragment>
  );
};

export default UseStateArrayExample;
