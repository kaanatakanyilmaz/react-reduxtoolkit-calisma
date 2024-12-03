import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { increment } from "./slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    increment: counterReducer,
    decrement: counterReducer,
  },
});
