import { useSelector } from "react-redux";
import { fetchTodos } from "../features/todoSlice";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const todoList = useSelector((state) => fetchTodos(state));

  return (
    <div className={classes.app__todoContainer}>
      {todoList.length === 0 ? (
        <div className={classes.empty}>No tasks found!</div>
      ) : (
        todoList.map((todo) => <TodoItem key={todo.id} {...todo} />)
      )}
    </div>
  );
};

export default TodoList;
