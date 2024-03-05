import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAllCompleted, setAllUncompleted } from "../../redux/actions";
import { Button } from "@mui/material";

const TaskCounter = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const allCompleted = todos.every((todo) => todo.completed);
  const allUncompleted = todos.every((todo) => !todo.completed);

  const handleSetAllCompleted = () => {
    dispatch(setAllCompleted());
  };

  const handleSetAllUncompleted = () => {
    dispatch(setAllUncompleted());
  };

  return (
    <div className="mt-4">
      <div className="text-2xl">
        <p>Total tasks:{todos.length}</p>
        <p>Completed tasks: {todos.filter((todo) => todo.completed).length}</p>
        <p>
          Uncompleted tasks: {todos.filter((todo) => !todo.completed).length}
        </p>
      </div>
      <div className="flex text-sm gap-5 mt-4">
        <Button
          variant="contained"
          onClick={handleSetAllCompleted}
          disabled={allCompleted}>
          Mark All Completed
        </Button>
        <Button
          variant="contained"
          onClick={handleSetAllUncompleted}
          disabled={allUncompleted}>
          Mark All Uncompleted
        </Button>
      </div>
    </div>
  );
};

export default TaskCounter;
