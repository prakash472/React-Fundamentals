import React from "react";
import ReactDOM from "react-dom";
import Setup from "./CustomHooks";
function App() {
  return (
    <>
      <Setup></Setup>
    </>
  );
}
ReactDOM.render(<App></App>, document.getElementById("root"));
