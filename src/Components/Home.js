import React from 'react';
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
// linear-gradient(45deg, #845EC2, #F9F871)
export const Home = (props) => {
  const homeStyle = {
    flexDirection: "column",
    backgroundColor: "rgba(255,255,255,0.1)",
    flexGrow: "1",
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <div className="d-flex" style={homeStyle}>
      <AddTodo addTodo={props.addTodo} />
      <TodoList todos={props.todos} onDelete={props.onDelete} />
    </div>
  )
}
