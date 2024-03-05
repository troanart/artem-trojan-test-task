export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: {
    text,
  },
});

export const toggleTodo = (index) => ({
  type: "TOGGLE_TODO",
  payload: {
    index,
  },
});

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: {
    filter,
  },
});

export const deleteTodo = (index) => ({
  type: "DELETE_TODO",
  payload: {
    index,
  },
});

export const editTodo = (index, newText) => ({
  type: "EDIT_TODO",
  payload: {
    index,
    newText,
  },
});

export const setAllCompleted = () => ({
  type: "SET_ALL_COMPLETED",
});

export const setAllUncompleted = () => ({
  type: "SET_ALL_UNCOMPLETED",
});
