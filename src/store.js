// store.js

import { configureStore } from "@reduxjs/toolkit";

const initialState = { count: 0 };

function counter(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DSC":
      return { ...state, count: state.count - 1 };
    case "INC5":
      return { ...state, count: state.count + action.payload.value };
    default:
      return state;
  }
}

const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;
