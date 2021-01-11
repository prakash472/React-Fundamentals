/* Two types of exports are available one is named export and the other one is the default export.
named export:
In case of the named export we should match the exact name. Here we have books so we should 
import {books} in our index.js not any other name
 */
export const books = [
  {
    id: 1,
    author: "Book 1 Author Modified",
    title: "Book 1 Title",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51x8WaTt84L._AC_SX368_.jpg",
  },
  {
    id: 2,
    author: "Book 2 Author",
    title: "Book 2 Title",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51x8WaTt84L._AC_SX368_.jpg",
  },
];
