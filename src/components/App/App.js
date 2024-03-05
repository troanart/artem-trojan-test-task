import React from "react";
import AddTodo from "../AddTodo/AddTodo";
import DisplayTodo from "../TodoList/TodoList";
import TaskCounter from "../TaskCounter/TaskCounter";
import TodoFilter from "../TodoFilter/TodoFilter";
import TodoSorter from "../TodoSorter/TodoSorter";
import { Card, CardContent } from "@mui/material";

export default function App() {
  return (
    <div className="flex  justify-center  p-5 w-[100wh] h-[100vh]">
      <Card className="mr-10 w-[30%]">
        <CardContent>
          <TodoFilter />
          <TodoSorter />
          <TaskCounter />
        </CardContent>
      </Card>
      <Card className="w-[70%]  ">
        <CardContent>
          <AddTodo />
          <Card className="mt-5">
            <CardContent>
              <DisplayTodo />
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
