import './App.css';
import {Header} from "./Components/Header";
import {AddTodo} from "./Components/AddTodo";
import {TodoList} from "./Components/TodoList";
import {Footer} from "./Components/Footer";
import {About} from "./Components/About";
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodo;
  if(localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  const onDelete = (todo) => {
    setTodos(todos.filter((element)=>{
      return element!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if(todos.length === 0)
      sno = 1;
    else 
      sno = todos[todos.length-1].sno + 1;
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodos([...todos, newTodo]);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const appStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  };

  return (
    <div style={appStyle}>
      <Router>
        <Header title="TODO-LIST" searchbar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <TodoList todos={todos} onDelete={onDelete} />
                <AddTodo addTodo={addTodo} />
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
