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
    <div className="flex flex-col md:flex-row md:gap-2 ">
      <Button
        variant="contained"
        color="primary"
        className="w-full md:w-[50%] mb-2 md:mb-0"
        onClick={sortByCompleted}>
        Show Completed
      </Button>
      <Button
        className="w-full md:w-[50%]"
        variant="contained"
        color="secondary"
        onClick={sortByUncompleted}>
        Show Uncompleted
      </Button>
    </div>
  );
};

export default TodoSorter;
