import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./Books.js";
import Book from "./Book.js";

function BookList() {
  return (
    <section className="wrapper">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDOM.render(<BookList></BookList>, document.getElementById("root"));
