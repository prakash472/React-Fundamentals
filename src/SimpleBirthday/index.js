import React from "react";
import ReactDOM from "react-dom";
import { datas } from "./birthdays";
import Birthday from "./Birthday";
function BirthdayList() {
  const [birthdays, setBirthdays] = React.useState(datas);
  const clearAll = () => {
    return setBirthdays([]);
  };
  return (
    <React.Fragment>
      <h1>{birthdays.length} total Birthdays</h1>
      {birthdays.map((data) => {
        const { name, age } = data;
        // Here we are paasing the prop as the object. It means that our required prop or value is the property of the
        // props that we have pass. Here we have pass our prop data as the object to the birthday. Now, we can access
        // our prop by accessing the property of our prop name. i.e birthday.birthday
        return <Birthday key={data.id} birthday={data}></Birthday>;
      })}
      <button type="submit" onClick={clearAll}>
        Clear All
      </button>
    </React.Fragment>
  );
}
ReactDOM.render(<BirthdayList></BirthdayList>, document.getElementById("root"));
