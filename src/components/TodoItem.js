import classes from "./TodoItem.module.css";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleDone } from "../features/todoSlice";

const TodoItem = ({ item, done, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(toggleDone(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={classes.todoItem}>
      <label className={classes["checkbox-label"]}>
        <input type="checkbox" checked={done} onChange={handleCheck} />
        <span className={classes["custom-checkbox"]}></span>
      </label>
      <p className={done ? classes["todoItem--done"] : undefined}>{item}</p>
      <button className={classes["delete-btn"]} onClick={handleDelete}>
        x
      </button>
    </div>
  );
};

export default TodoItem;
