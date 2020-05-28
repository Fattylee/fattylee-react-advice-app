const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + 1 };
    case "decrease":
      return { ...state, counter: state.counter - 1 };
    case "set_counter":
      console.log("set_counter", action.payload);

      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
