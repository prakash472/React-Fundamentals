import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "./useFetch";

const PerformanceOptimization = () => {
  const productsURL =
    "https://course-api.netlify.app/api/javascript-store-products";

  const { products } = useFetch(productsURL);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  const increaseCounter = () => {
    setCount(count + 1);
  };
  const increaseCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  const calculateMostExpensive = (products) => {
    const price = 89;
    return price;
  };
  const mostExpensive = useMemo(() => calculateMostExpensive(products), [
    products,
  ]);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button type="button" onClick={() => increaseCounter()}>
        Click Me
      </button>
      <h2>Cart: {cart}</h2>
      <h3>Most Expensive:$ {mostExpensive}</h3>
      <BigList products={products} increaseCart={increaseCart}></BigList>
    </div>
  );
};

const BigList = React.memo((props) => {
  const { products, increaseCart } = props;
  useEffect(() => {
    console.count("BigListCalled");
  });
  return (
    <>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            product={product}
            increaseCart={increaseCart}
          ></SingleProduct>
        );
      })}
    </>
  );
});

const SingleProduct = (props) => {
  useEffect(() => {
    console.count("Single Product Called");
  });
  const { product, increaseCart } = props;
  console.log(increaseCart);
  const { fields } = product;
  return (
    <div>
      <h3>{fields.name}</h3>
      <img
        src={fields.image[0].url}
        style={{ width: "100px", height: "100px" }}
        alt={fields.name}
      ></img>
      <h4>{fields.price}</h4>
      <button type="button" onClick={() => increaseCart()}>
        Add To Cart
      </button>
    </div>
  );
};
export default PerformanceOptimization;

/* 
Here when we use the initial function then when we change the state of the count value, then
it rerenders the component which includes re-rendering the BigList Component and SingleProduct
Component. Here, each time we increase the value, it re-renders the BigList Component and the 
BigList will rerender the SingleProduct Component for all the products every time we change the 
state of count. (Not using dependency array so useEffect triggers automatically after every
re render). We can use the concept of React.memo to solve this problem.

Here memoization means using the cache result or remembering the value rather than re-rendering.

Here we can solve the problem using the memo method defined in the React. Here we simply wrap
our component into the memo function. Here the memo function memoization the products and if the
value of the products is not changed then we will not re-render the components.
*/

/* 
Here when we pass the increaseCart function to the function below in component. Then when
we add any items in the cart, then the function increaseCart in invoked which inturns changes
the state value of the Cart. Here, when we click an add to cart button, the function is being
recreated every time we click. This will inturn make the prop i.e increaseCart in BigList Component
to think that the function is being re-created. Since  the prop changes, the React.memo function
thinks that the value is changed and it will again re-render the components. Here, we do the 
same thing as we did for the Component using React.memo but here instead of component we will 
check for the function. If the value for the function is changed then only, the function is 
created else not. It can be done using the help of useCallback hook. Here also we wrap the function
with useCallback hook and we add the dependency array to track the changes. Here, due to this 
if we only click on count we will not rerender the component.


However, if we pass the dependency array as [], we will always get the cart value as zero because,
at first the function is already created and it will not be created once the cart value changes and 
we will always get the value as defaultValue. So, we have to pass the value which we want to 
track in dependency array.


React.memo specifically checks if the prop value has change or not. However, the useMemo will
check for the value. Here, say if our function takes a large computational time. Again, if we
want to keep on re rendering the function than it is not an appropriate approach. Here we
use the callback function to preserve the value of a function and only re-create the function
when the value changes. Else our component might render again and again and our app will take 
high memory.
*/
