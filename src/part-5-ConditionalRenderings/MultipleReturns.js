import React, { useState, useEffect } from "react";

// Conditional Rendering means returning multiple returns beased on some conditions.
// In JS if we have first return then it will execute first return and ignore the remaining one.
// convention for boolean is to start with like isTrue isError.
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [isError, setIsError] = useState(false);
  const profileUrl = "https://api.github.com/users/QuincyLarsons";

  /* 
  Here it is done using the async approach as we have seen previously. We can also do it with another approach.
    const getUser = async () => {
    const response = await fetch(profileUrl);
    const user = await response.json();
    setUser(user);
  };
  useEffect(() => {
    getUser();
  }, []);
  */
  useEffect(() => {
    fetch(profileUrl)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsError(true);
          setIsLoading(false);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  /* 
  Here when we use the fetch than it does not specify the error. It means that the error can be a 
  404-Object not Found or some network error but the fetch only provides the network error
  . If there is no object found than we should set the 
  loading Flag to false and provide 404 error not found. But if we can't load due to Network error
  we should provide that error. Hence we look at the status of our response and act accordingly.
  */

  if (isLoading) {
    return <h2>....Loading</h2>;
  }
  if (isError) {
    return <h2>....Error</h2>;
  }
  return (
    <div>
      {() => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <div>
            {console.log(login)}
            <img src={avatar_url} alt={login}></img>
            <h3>{login}</h3>
            <a href={html_url}>Profile</a>
          </div>
        );
      }}
      {/* <img src={avatar_url} alt={login}></img>
      <h3>{login}</h3>
    <h3>{user}</h3>
    <a href={html_url}>Profile</a> */}
    </div>
  );
};

export default MultipleReturns;
