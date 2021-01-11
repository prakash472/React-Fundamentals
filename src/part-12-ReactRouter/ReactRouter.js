/* 
In case of react, if we want to have the multiple page web app, then we can create it with 
the help of react router. It is an external package however. Here, we can visit multiple 
routes without requesting the server. The main advantage of react is that we can visit
multiple routes from the client side only. No need to refresh the pages.
*/

/* 
Here we have multiple components and each of these components are treated as a page. Here, 
we import the BrowserRouter and provide it with alias name. 
*/
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import People from "./People";
import Person from "./Person";
import Error from "./Error";
import About from "./About";

const ReactRouter = () => {
  return (
    <Router>
      <Navbar />
      {/*We place the Navbar component above the switch because it is always displayed */}
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/person/:id" children={<Person />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouter;

/* 
Here inside the router we place every component or we wrap the root component with the router.
Here when we first use React path ="/", then it will go to the specific path. However, the 
other path also "/people" will also show the homepage, because the react displays the path
which matches its ahead route (Here "/people" has "/" ahead so it displays ahead part also.).In
order to prevent the displaying the component that matches the route we have to use the exact
keyword. If we have a nested components than we can do that but here it is not needed
*/

/* 
Here if we route to the page that does not exist than we will not get an error but rather 
see an empty page. However, we can set path="*". Here "*" means it will always match the
path. Here, when we visit a route that is not defined it will always use this path. Here,
we can set up the error page. However, since this path is always matched, it will also be
displayed in each of the other page as described above. In the homepage, we will also have 
an error page. We can solve this problem by placing all of our routes inside the Switch component.
The Switch component will only display the first path that matches and we avoid duplicating of
paths.
*/

/* 
Here if we to pass the data directly or view the details of the people or any other blog post
then we have the pass the id of that particular person or the blog. We can use that 
with the help of URL parameters. Here we set of the route but the compoenent we want to 
pass the value is the considered to be inside the Childern.

*/
