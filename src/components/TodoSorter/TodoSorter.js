import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions";
import { Button } from "@mui/material";

const TodoSorter = () => {
  const dispatch = useDispatch();

  const sortByCompleted = () => {
    dispatch(setFilter("completed"));
  };

  const sortByUncompleted = () => {
    dispatch(setFilter("current"));
  };

  return (
    <div className="flex gap-2 ">
      <Button
        variant="contained"
        color="primary"
        className=" w-[50%]"
        onClick={sortByCompleted}>
        Show Completed
      </Button>
      <Button
        className=" w-[50%]"
        variant="contained"
        color="secondary"
        onClick={sortByUncompleted}>
        Show Uncompleted
      </Button>
    </div>
  );
};

export default TodoSorter;
