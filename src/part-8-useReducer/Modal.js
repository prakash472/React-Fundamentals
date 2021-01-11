import React, { useEffect } from "react";

const Modal = (props) => {
  const { modalContent, closeModal } = props;
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  console.log(modalContent);
  return (
    <div>
      <h2>{modalContent}</h2>
    </div>
  );
};

export default Modal;

/* 
Here we passed the closeModal function in our props to our Modal Component from our Use Reducer
component. Then we setup the useEffect hook so that every time we render the modal component
we use the closeModal function that will use the dispatch function after 3 seconds. It means
after 3 seconds closeModal() function works that will dispatch function. After that it sets 
the action type to CLOSE_MODAL then the reducer sets the isModalOpen to false which will lead
to close the modal.

--------------------------------------------------------------------------------
* We can pass the function as a prop also
*/
