import React, { useState, useEffect } from "react";
/* 
Here useEffect(async ()=>{}) is incorrect because an async
function returns a promise. We can not write the async in 
useEffect function because useEffect function expects cleanup 
function not a promise. So we have to declare the async function
inside or outside the useEffect() function but not in the useEffect()
function itself.
*/
const profileUrls = "https://api.github.com/users";

const UseEffectSecondArgument = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(profileUrls);
    const users = await response.json();
    console.log(users);
    setUsers(users);
    /* 
    Here if we want to set the users as setUsers(users) then it will ultimately crash the browser.
    It is because when we use setUsers function it will rerender and upon rerendering, useEffect() function
    will execute and it will inturn execute the getUsers function. Again the cycle repeats.
    getUsers()->setUsers()->useEffect()->getUsers().
    We will have an infinite loop for that reason, we have to make sure that after loading the data, the useEffect
    function does not rerender or executing once is sufficient. We can do that by the help of second parameter of 
    useEffect function.
    */
  };
  useEffect(() => {
    getUsers();
    // Async does not work. We set up a function and that function acts as async.
  }, []);
  return (
    <div>
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <div key={id}>
            <img src={avatar_url} alt={login}></img>
            <div>
              <h4>{login}</h4>
              <a href={html_url}>Profile</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UseEffectSecondArgument;

/* If we have any function inside the useEffect() function or any
functions callback inherits from a function leading to a function 
inside the useEffect function always remember to add dependency array
in second parameter. Else we might end up in infinite loop   */
