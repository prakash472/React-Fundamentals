import React, { useState, useEffect } from "react";

const ShowHideComponents = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <h2>Window Size</h2>
      <button type="button" onClick={() => setIsShow(!isShow)}>
        Toggle Size
      </button>
      {isShow && <ShowWindowSize />}
    </div>
  );
};

/*
const ShowWindowSize = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);
   
  Here when we perform the above function or pass the dependency array as second parameter then it 
  will not work as we used in the Example of useEffect. It is because here we show and hide the 
  components. And after rendering i.e again showing the window size. we set up the new event listener.
  Here, we set up for one state and change in state leads to addition of another EventListener. So, we 
  have to use the clean up function
  */
const ShowWindowSize = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div>
      <h2>{size}</h2>
    </div>
  );
};

export default ShowHideComponents;
