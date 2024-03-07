import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions";
import { Button, TextField } from "@mui/material";

const TodoFilter = () => {
  const [filterText, setFilterText] = useState("");
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const applyFilter = () => {
    dispatch(setFilter(filterText));
  };

  return (
    <div className="flex flex-col md:flex-row items-center mb-4">
      <TextField
        className="w-full md:w-[70%] mr-0 md:mr-2 mb-2 md:mb-0"
        id="outlined-basic"
        label="Enter filter text"
        variant="outlined"
        type="text"
        value={filterText}
        onChange={handleFilterChange}
      />
      <Button
        style={{
          padding: 16,
        }}
        className="w-full md:w-[30%] "
        variant="contained"
        onClick={applyFilter}>
        Apply
      </Button>
    </div>
  );
};

export default TodoFilter;
