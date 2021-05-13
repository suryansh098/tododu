import React from 'react';
import { TodoItem } from './TodoItem';
import {NoItem} from './NoItem';
import PropTypes from 'prop-types';

export const TodoList = (props) => {
  const todoListStyle = {
    padding: "0",
    backgroundColor: "#006B5F",
    color: "#ffffff",
    maxWidth: "500px",
    boxShadow: "-20px -20px 0px 0px rgba(100,100,100,.1)"
  }

  return (
    <div className="container card m-2 my-4 text-center" style={todoListStyle}>
      <div className="card-header">
        <h5 className="card-title">TODO - LIST</h5>
      </div>
      <div className="card-body">
        {
          (props.todos.length === 0) ?
          <NoItem /> :
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
        }
      </div>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array
}
