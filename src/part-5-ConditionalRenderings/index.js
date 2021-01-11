import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
//import Setup from "./ShortCircuitEvaluation";
//import Setup from "./MultipleReturns"; ----> multipleReturns
import Setup from "./ShowHideComponents";
function App() {
  return (
    <>
      <Setup></Setup>
    </>
  );
}
ReactDOM.render(<App></App>, document.getElementById("root"));
