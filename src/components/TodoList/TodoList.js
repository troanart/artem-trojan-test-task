import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../../redux/actions";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";

const TodoList = () => {
  const todos = useSelector((state) => {
    if (state.filter === "completed") {
      return state.todos.filter((todo) => todo.completed);
    } else if (state.filter === "current") {
      return state.todos.filter((todo) => !todo.completed);
    } else {
      return state.todos;
    }
  });
  const dispatch = useDispatch();
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleToggleTodo = (index) => {
    dispatch(toggleTodo(index));
  };

  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  const handleEditChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleEditSave = (index) => {
    dispatch(editTodo(index, editedText));
    setEditedIndex(null);
    setEditedText("");
  };

  return (
    <div>
      <h1 className="text-4xl mb-4">Todo List</h1>
      <Divider className="" />
      <ul className="mt-4 ">
        {todos.map((todo, index) => (
          <li
            className="text-2xl my-5"
            key={index}
            onClick={() => handleToggleTodo(index)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}>
            {editedIndex !== index ? (
              <Card className="border-6 border-l border-l-emerald-500">
                <CardContent className="flex ">
                  <span>{todo.text}</span>
                  <div className="ml-auto">
                    <IconButton
                      color="primary"
                      aria-label="edit"
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditedIndex(index);
                      }}>
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      aria-label="delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTodo(index);
                      }}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="flex  ">
                  <TextField
                    sx={{
                      marginRight: "auto",
                    }}
                    className="w-[35%]"
                    autoFocus
                    variant="outlined"
                    type="text"
                    value={editedText}
                    onChange={handleEditChange}
                  />
                  {editedIndex === index ? (
                    <Button
                      variant="contained"
                      className="py-5 "
                      onClick={() => handleEditSave(index)}>
                      Save
                    </Button>
                  ) : null}
                </CardContent>
              </Card>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
