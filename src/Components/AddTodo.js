import React, { useState } from 'react';

export const AddTodo = (props) => {
  const addTodoStyle = {
    padding: "0",
    backgroundColor: "#006B5F",
    color: "#ffffff",
    maxWidth: "500px",
    boxShadow: "-20px -20px 0px 0px rgba(100,100,100,.1)"
  }
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (!title || !desc)
      alert("Title or Description cannot be blank!");
    else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  }

  return (
    <div className="container card m-2 mt-4 text-center" style={addTodoStyle}>
      <div className="card-header">
        <h5 className="card-title">ADD - A - TODO</h5>
      </div>
      <div className="card-body">
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Todo Title :</label>
            <input type="text" value={title} className="form-control" style={{backgroundColor: "#e8f0fe"}} id="title" onChange={(event) => setTitle(event.target.value)} aria-describedby="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Todo Description :</label>
            <textarea className="form-control" value={desc} id="desc" onChange={(event) => setDesc(event.target.value)} aria-describedby="description" style={{height: "100px", resize: "none", backgroundColor: "#e8f0fe"}}></textarea>
          </div>
          <button type="submit" className="btn" style={{backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,.3)"}}>Add to list</button>
        </form>
      </div>
    </div>
  )
}
