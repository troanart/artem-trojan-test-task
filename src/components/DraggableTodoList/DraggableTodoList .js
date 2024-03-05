import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { toggleTodo } from "../../redux/actions";

const DraggableTodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggleTodo = (index) => {
    dispatch(toggleTodo(index));
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    const reorderedTodos = [...todos];
    const [removed] = reorderedTodos.splice(startIndex, 1);
    reorderedTodos.splice(endIndex, 0, removed);

    dispatch({ type: "SET_TODOS", payload: reorderedTodos });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {todos.map((todo, index) => (
              <Draggable
                key={index}
                draggableId={`todo-${index}`}
                index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={() => handleToggleTodo(index)}
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                      ...provided.draggableProps.style,
                    }}>
                    {todo.text}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableTodoList;
