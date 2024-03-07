import React from "react";
import AddTodo from "../AddTodo/AddTodo";
import DisplayTodo from "../TodoList/TodoList";
import TaskCounter from "../TaskCounter/TaskCounter";
import TodoFilter from "../TodoFilter/TodoFilter";
import TodoSorter from "../TodoSorter/TodoSorter";
import { Card, CardContent } from "@mui/material";

export default function App() {
  return (
    <div className="flex flex-col md:flex-row justify-center p-5 w-full h-full">
      <Card className="md:mr-10 md:w-[30%] mb-5 md:mb-0">
        <CardContent>
          <TodoFilter />
          <TodoSorter />
          <TaskCounter />
        </CardContent>
      </Card>
      <Card className="w-full md:w-[70%]">
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
