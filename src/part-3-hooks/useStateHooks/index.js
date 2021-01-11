import React from "react";
import ReactDOM from "react-dom";
// import Setup from "./use-state-example"; ---->UseStateExample
//import Setup from "./useState-ArrayExample";----->UseStateArrayExample
//import Setup from "./useState-ObjectExample"; ------>UseStateObjectExample
import Setup from "./useState-CounterExample";

function Base() {
  return (
    <>
      <Setup></Setup>
    </>
  );
}
ReactDOM.render(<Base></Base>, document.getElementById("root"));
