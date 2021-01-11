import React from "react";
import { useFetch } from "./part-10-CustomHooks/useFetch";
import PropTypes from "prop-types";

const defaultImage =
  "https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg";
const PropTypesDemo = () => {
  const productsURL =
    "https://course-api.netlify.app/api/react-prop-types-example";
  const { isLoading, isError, products } = useFetch(productsURL);
  return (
    <div>
      {isLoading ? (
        <h2>Loading....</h2>
      ) : (
        products.map((product) => {
          return <ShowProducts key={product.id} {...product}></ShowProducts>;
        })
      )}
    </div>
  );
};
const ShowProducts = (props) => {
  console.log(props);
  const { image, name, price } = props;
  const url = image && image.url;
  return (
    <section>
      <h3>{name}</h3>
      <img src={url || defaultImage} alt={name || "defaultName"}></img>
      <h4>${price || 25.99}</h4>
    </section>
  );
};
ShowProducts.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
/* ShowProducts.defaultProps = {
  image: { defaultImage },
  name: "defaultName",
  price: 25.99,
}; */
/* 
Here like this way we can use the default props to add some of the default values to our 
props. Here, we have an property url for image but since, we cannot provide, we do not 
get the default image in our web app. Here, using the default prop we can solve the 
problem of missing properties from a API but to handle it more effeciently, we can use 
the concept of short circuit evaluation.
*/
export default PropTypesDemo;

/* 
Here many times when we use the API of a external source, there might be some of the values
that are missing. If single property is also missing in a API, the entire code breaks. Beacause
of the simple error our whole program may crash. For this reason, we should be able to handle
those missing values. PropTypes helps us to solve this problem.

Here, we can see that image field has an object url which consists the url for the product image.
But since our API does not have an image field. We have to make sure that which of the properties
of products are missing and assign the deafault values to the missing props. 
*/
