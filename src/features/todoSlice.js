import { createSlice } from "@reduxjs/toolkit";

const getSavedTodos = () => {
  const todoList = JSON.parse(localStorage.getItem("todos"));
  return todoList ? todoList : [];
};

const saveTodos = (todoList) => {
  localStorage.setItem("todos", JSON.stringify(todoList));
};

const initialState = {
  todoList: getSavedTodos(),
  filter: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
      saveTodos(state.todoList);
    },
    toggleDone: (state, action) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      todo.done = !todo.done;
      saveTodos(state.todoList);
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      saveTodos(state.todoList);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { saveTodo, toggleDone, deleteTodo, setFilter } =
  todoSlice.actions;

export const fetchTodos = (state) => {
  const { todoList, filter } = state.todos;
  if (filter === "all") return todoList;
  if (filter === "completed") return todoList.filter((todo) => todo.done);
  if (filter === "remaining") return todoList.filter((todo) => !todo.done);
  return [];
};

export default todoSlice.reducer;
