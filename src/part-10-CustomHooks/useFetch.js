import { useState, useEffect } from "react";
export const useFetch = (productsURL) => {
  const [isError, setIsError] = useState(false);
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
  return { isLoading, isError, products };
};
/* 
we cannot use hooks inside a regular function. Either it should be a Component or a custom hook.
Here if we change the name fromm useFetch to only fetch then we will have error because it 
will be a normal function and normal function cannot have a hook.  
*/
