export const reducer = (state, action) => {
  /* 
  Here at first while using the useReducer hook, we pass the reducer function and the defaultState,
  and then it returns the state and the dispatch function. This state refers to the defaultState at 
  the begining and goes on changing as we change the state. Since, it is the one that always 
  returns the state we should always return the state, otherwise we can not access them in our app.
  const [state, dispatch] = useReducer(reducer, defaultState);
  Then for some specific action we modify the state and perform accordingly. To receive the 
  data we use action.payload.
  */
  console.log(state, action);
  if (action.type === "ADD_NAME") {
    const newPerson = [...state.people, action.payload];
    return {
      ...state,
      people: newPerson,
      isModalOpen: true,
      modalContent: "Name is Added",
    };
    /* 
    Here initally our data [{},{}] is a list of objects. Here at first we create a new list 
    of person newPerson, that has the previous list of people same and in that list, we add
    the new object or new Person in the list of people. Now our data is somewhat [{},{},{action.payload}].
    After aadding the new person. We then return the state preserving all its previous value 
    and modifying people state to our new data i.e. newPerson.
    */
  }
  if (action.type === "EMPTY") {
    return { ...state, modalContent: "Name is Empty" };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "DELETE_NAME") {
    const newPerson = state.people.filter(
      (person) => person.id !== action.payload
    );

    return {
      ...state,
      people: newPerson,
      isModalOpen: true,
      modalContent: "Name is Deleted",
    };
  }

  throw new Error("No matching Action Type"); // If none of the action.type matches it throws this error.
};
