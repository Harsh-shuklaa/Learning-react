import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Feature/todo/todoSlice";

export const store = configureStore({
 reducer:{
   todo: todoSlice,
 }
});

