import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// stateless functional component
// always return JSX

/* function Greeting() {
  return <h4>This is the testing file</h4>;
}
ReactDOM.render(<Greeting />, document.getElementById("root"));
 */
/* 
const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello World")
  );
};
ReactDOM.render(<Greeting />, document.getElementById("root"));
 */

// JSX Rules
// return single element
// div/section/article or Fragment (<>,</>)d
// use camelCase for html attribute
// className instead of class
// close every elemnt
// formatting

/* function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>This is my message</p>;
};
ReactDOM.render(<Greeting />, document.getElementById("root"));
 */

// VARS setup
/* const author_name = "Author Name";
const book_title = "This is the book title";
const img_src =
  "https://images-na.ssl-images-amazon.com/images/I/51x8WaTt84L._AC_SX368_.jpg";

  */

const books = [
  {
    id: 1,
    author: "Book 1 Author",
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
/* const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames); */

/*
Here passing the object as a whole in the map.
function BookList() {
  return (
    <section className="wrapper">
      {books.map((book) => {
        // We cannot directly render the object book so we first look for the properties of the book.
        // const { img, title, author } = book;
        // we are passing it as an object as a whole. But we can also use the spreader operator.
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
} */

function BookList() {
  return (
    <section className="wrapper">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// Can be done inside the function or outside the function. Props means property
// const Book = ({ img, title, author }) => {
const Book = (props) => {
  console.log(props);
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt="" style={{ width: 300, height: 250 }}></img>
      <h3>{author}</h3>
      <h4>{title}</h4>
      {children}
    </article>
  );
};
ReactDOM.render(<BookList />, document.getElementById("root"));
