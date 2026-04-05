import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      msg: "First Todo",
      completed: false,
    },
  ],
};
export  const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        msg: action.payload,
        completed: false,
      };
      state.todos.push(todo);

      console.log("hoGaya");
      
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id == action.payload.id  ? {...todo,msg:action.payload.msg} : todo,
      );
    },
    deleteAllTodo: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, removeTodo, editTodo, deleteAllTodo } = todoSlice.actions;
export default todoSlice.reducer;
