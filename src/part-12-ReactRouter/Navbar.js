import React from "react";
import { Link } from "react-router-dom";
/* 
Here instead of the traditional href tag to provide the link we will import the Link from 
the react-router-dom and use the keyword Link to route our path. We will match the path name
exactly.
*/
const Navbar = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
