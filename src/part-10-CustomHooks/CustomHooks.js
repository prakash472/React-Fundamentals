import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

const CustomHooks = () => {
  const productsURL =
    "https://course-api.netlify.app/api/javascript-store-products";
  /* const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await fetch(productsURL);
    console.log(response.status);
    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } else {
      setIsError(true);
      setIsLoading(false);
      throw new Error(response.statusText);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
 */
  const { isLoading, isError, products } = useFetch(productsURL);
  if (isError) {
    return <h2>Error.....</h2>;
  }
  return (
    <div>
      {isLoading ? <h2>Loading</h2> : <ShowProducts products={products} />}
    </div>
  );
};

const ShowProducts = (props) => {
  const { products } = props;
  return (
    <>
      {products.map((product) => {
        const { id, fields } = product;

        console.log(fields.image);
        return (
          <div key={id}>
            <h2>{fields.name}</h2>
            <img src={fields.image.url} alt={fields.name}></img>
          </div>
        );
      })}
      ;
    </>
  );
};

export default CustomHooks;

/* 
Here, if we want to re-use the html, then we can use the same component. However, if we have 
two different component, but they have same sort of functionality. We can not by normal means
re-use the functionality. For e.g. if we want to fetch the data then for the component we 
have to manage the loading of data and receving the JSON response. However, another compoent
also wants to fetch the data then we have to write the same piece of code. For that reason, 
to avoid the duplication of code we use the concept of custom hooks. Here, in custom hooks,
we keep the custom hook in the separate file and import it whenever we want.

*/
