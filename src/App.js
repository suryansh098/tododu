import './App.css';
import {Header} from "./Components/Header";
import {Home} from "./Components/Home";
import {About} from "./Components/About";
import {Footer} from "./Components/Footer";
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
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "linear-gradient(45deg, #F9F871, #007160)",
  };

  return (
    <div style={appStyle}>
      <Router basename={process.env.PUBLIC_URL}>
        <Header title="TODODU" searchbar={false} />
        <Switch>
          <Route exact path="/" >
            <Home todos={todos} onDelete={onDelete} addTodo={addTodo} />
          </Route>
          <Route exact path="/about" >
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
