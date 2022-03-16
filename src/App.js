import React from "react";
import "./App.css";

import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <TodoList />
        <Input />
      </div>
    </div>
  );
}

export default App;
