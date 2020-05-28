const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + 1 };
    case "decrease":
      return { ...state, counter: state.counter - 1 };
    default:
      return "nothing here";
  }
};

export default reducer;
