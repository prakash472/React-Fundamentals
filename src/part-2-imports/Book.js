// We can have many named export but only one default export per file
import React from "react";

const book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    return alert("hello world");
  };
  const complexFunction = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        return console.log(title);
      }}
    >
      <img src={img} style={{ width: 300, height: 250 }} alt=""></img>
      <h3>{author}</h3>
      <h4>{title}</h4>
      <button onClick={clickHandler}>On-Click-Handler</button>
      <button onClick={() => complexFunction(author)}>Complex Function</button>
    </article>
  );
};

export default book;
