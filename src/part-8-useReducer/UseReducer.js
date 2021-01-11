/*  
It is good to use the useState if our app is simple. But for
some complex app it is good practice to use useReducer. Here we 
won't change the state directly but we have to go through some state.
*/
/* import React, { useState } from "react";
import Modal from "./Modal";
import { data } from "./names";

const UseReducer = () => {
  const [name, SetName] = useState("");
  const [showModal, SetShowModal] = useState(false);
  const [people, setPeople] = useState(data);
  const changeHandler = (e) => {
    SetName(e.target.value);
    console.log(name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      SetShowModal(true);
      setPeople([
        ...people,
        { id: new Date().getTime().toString(), name: name },
      ]);
      console.log(people);
    } else {
      SetShowModal(true);
      SetName("");
    }
  };
  return (
    <>
      {showModal && <Modal></Modal>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={changeHandler}
          ></input>
          <button type="submit">Add Name</button>
        </div>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id}>
              <h3>{name}</h3>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default UseReducer;
 */
/* 
It was using the earlier concept of useState. But when we use the useReducer hook. It returns
two values, one is the state value and another is the dispatch function. The difference between
useState and useReducer is that we want to change the state, we always have to go through
the dispatch function which will invoke the reducer. The reducer is a function that takes the 
old value and perfroms action and returns the new state.Then we pass the code to separate file
from main code.
Reducer function takes two parameters. state and action. state to represent the current state
and action to perform the required action.


In dispatch we always pass an object with has an attribute: type which is our action. Once we 
dispatch our action, we need to handle it in reducer. Reducer takes previous state and action and
returns the new state.
*/

// -----------------------Using Reducer--------------------------------------------------

import React, { useReducer, useState } from "react";
import Modal from "./Modal";
import { data } from "./names";
import { reducer } from "./reducer";
const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: "Name Added",
};

const UseReducer = () => {
  const handleSubmit = (e) => {
    console.log(e.target);
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_NAME", payload: newItem });
      /* 
      Here if we want to bring the change the current state value with some new value, we refer
      this new item to be called as payload. Here in the dispatch function we pass the action object 
      which has attributes type and payload. Type is the action type and payload is the modified data
      we put in the new state(here we add this payload to the people state). Then we receive the 
      action.type and action.payload passed from dispatch to the reducer.
      
      */
      setName("");
    } else {
      dispatch({ type: "EMPTY" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const deleteName = (id) => {
    dispatch({ type: "DELETE_NAME", payload: id });
  };
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div>
      {state.isModalOpen && (
        <Modal
          closeModal={closeModal}
          modalContent={state.modalContent}
        ></Modal>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button type="submit">Add Name</button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button type="button" onClick={() => deleteName(person.id)}>
              Delete Name
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UseReducer;

/* Since reducer has way too many functionalities we keep the reducers in the separate file.
 */
