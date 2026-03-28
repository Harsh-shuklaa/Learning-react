import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../Feature/CounterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


