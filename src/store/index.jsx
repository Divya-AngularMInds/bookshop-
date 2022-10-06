import { configureStore } from "@reduxjs/toolkit";

const reducerfn = (state = { username: '' }, action) => {
    switch (action.type) {
      case "CHANGE_USERNAME":
        return {
          ...state,
          username: action.payload,
        };
      default:
        return state;
    }
}
const store = configureStore({ reducer: reducerfn });
export const changeUserName = (name) => {
  return {
    type: "CHANGE_USERNAME",
    payload: name,
  };
};
export default store;