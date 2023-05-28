const initValue = { value: 0 };

const rootReducer = (state = initValue, action) => {
  /* action:
    {
      type: 'todoList/increment',
      payload: 10,
    }
  */
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1,
      };

    // Time-travel debugging
    //state.value = state.value + 1;
    //return state;

    //Math.random(), Date.now()
    //Request toi' server

    //PURE FUNCTION

    //predictable
    case "todoList/increment":
      return {
        ...state,
        value: state.value + action.payload,
      };
    default:
      return state;
  }
};

// ACTION
const INCREMENT = {
  type: "todoList/increment",
  payload: 10,
};
// Action creators
const incrementCreator = (data) => {
  return {
    type: "todoList/increment",
    payload: data,
  };
};

// DISPATCH
// la 1 function

dispatch(incrementCreator(10));
