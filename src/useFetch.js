import { useState, useEffect, useCallback } from "react";
export const useFetch = (productsURL) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const getProducts = useCallback(async () => {
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
  }, [productsURL]);
  useEffect(() => {
    getProducts();
  }, [productsURL, getProducts]);
  return { isLoading, isError, products };
};
/* 
we cannot use hooks inside a regular function. Either it should be a Component or a custom hook.
Here if we change the name fromm useFetch to only fetch then we will have error because it 
will be a normal function and normal function cannot have a hook.  
*/

/* 

Here inside the useEffect() we have a function and we should add it to the dependency array or 
remove the function. But if we add getProducts() in the dependency array then we will get stuck
in the infinite look because when we have useEffect, it will getProducts which will set products
i.e getProducts function re-creates. Again we will call useEffect because the products is changed.
It can be solved using the useCallback hook. We simply add the function inside the useCallback
and it will only change when we get new products so we don't recreate the function. 
*/
