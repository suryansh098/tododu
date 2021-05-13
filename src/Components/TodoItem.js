import React from 'react'

export const TodoItem = (props) => {
  const todoItemStyle = {
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#fff"
  }

  return (
    <div className="card mb-3" style={todoItemStyle}>
      <div className="card-header">
        <h5 className="card-title">{props.todo.title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{props.todo.desc}</p>
        <button className="btn btn-sm" style={{backgroundColor: "#006B5F", color: "#fff", border: "1px solid rgba(255,255,255,.3)"}} onClick={() => props.onDelete(props.todo)}>Delete</button>
      </div>
    </div>
  )
}
