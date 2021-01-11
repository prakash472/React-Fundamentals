import React from "react";

const Birthday = (props) => {
  console.log(props);
  const { name, age } = props.birthday;
  return (
    <div>
      <h3> {name}</h3>
      <h3> {age}</h3>
    </div>
  );
};

export default Birthday;
