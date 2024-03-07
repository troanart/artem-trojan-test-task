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
    <div className="flex flex-col md:flex-row items-center mb-4">
      <TextField
        className="w-full md:w-[80%] mr-0 md:mr-2 mb-2 md:mb-0 focus:outline-white"
        id="outlined-basic"
        label="Enter task"
        type="text"
        value={text}
        onChange={handleChange}
        variant="outlined"
      />

      <Button
        style={{
          padding: 16,
        }}
        className="w-full md:w-[20%] p-8 "
        variant="contained"
        onClick={handleSubmit}
        startIcon={<AddIcon />}>
        Add task
      </Button>
    </div>
  );
};

export default AddTodo;
