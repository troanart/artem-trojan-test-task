import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";
import { Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const MAX_TODO_LENGTH = 100;

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    if (text.trim() !== "" && text.length <= MAX_TODO_LENGTH) {
      dispatch(addTodo(text));
      setText("");
    } else {
      alert(
        `Please enter a valid todo (maximum ${MAX_TODO_LENGTH} characters)`
      );
    }
  };

  return (
    <div className="flex">
      <TextField
        className="w-[80%] focus:outline-white"
        id="outlined-basic"
        label="Enter task"
        type="text"
        value={text}
        onChange={handleChange}
        variant="outlined"
      />

      <Button
        className="w-[20%]"
        variant="contained"
        onClick={handleSubmit}
        startIcon={<AddIcon />}>
        Add task
      </Button>
    </div>
  );
};

export default AddTodo;
