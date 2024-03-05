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
    <div className="flex mb-4">
      <TextField
        className="w-[70%]"
        id="outlined-basic"
        label="Enter filter text"
        variant="outlined"
        type="text"
        value={filterText}
        onChange={handleFilterChange}
      />
      <Button variant="contained" className="w-[30%]" onClick={applyFilter}>
        Apply
      </Button>
    </div>
  );
};

export default TodoFilter;
