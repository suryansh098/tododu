import { useDispatch } from "react-redux";
import { setFilter } from "../features/todoSlice";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={classes["app__header"]}>
      <h1>Tododu</h1>
      <div className={classes.options}>
        <select name="filter" onChange={handleFilter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="remaining">Remaining</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
