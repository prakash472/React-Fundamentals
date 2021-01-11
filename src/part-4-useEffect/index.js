import React from "react";
import ReactDOM from "react-dom";
//import Setup from "./useEffectBasics";  ---> useEffect- showing Notification
//import Setup from "./useEffect-CleanUp"; ----> useEffect CleanUp Function
import Setup from "./UseEffectSecondArgument";
function App() {
  return (
    <>
      <Setup></Setup>
    </>
  );
}
ReactDOM.render(<App></App>, document.getElementById("root"));
