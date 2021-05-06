import React,{useState} from 'react';

export const AddTodo = (props) => {
  const addTodoStyle = {
    flexGrow: "1"
  }
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if(!title || !desc)
      alert("Title or Description cannot be blank!");
    else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  }

  return (
    <div className="container my-3" style={addTodoStyle}>
      <h3 className="text-center">ADD TODO</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title :</label>
          <input type="text" value={title} className="form-control" id="title" onChange={(event)=> setTitle(event.target.value)} aria-describedby="title"/>
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description :</label>
          <input type="text" value={desc} className="form-control" id="desc" onChange={(event)=> setDesc(event.target.value)} aria-describedby="description"/>
        </div>
        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
      </form>
    </div>
  )
}
