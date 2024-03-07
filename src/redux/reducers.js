const initialState = {
  todos: [],
  filter: "all",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todos: state.todos.filter(
          (todo, index) => index !== action.payload.index
        ),
      };
    }
    case "EDIT_TODO": {
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.index
            ? { ...todo, text: action.payload.newText }
            : todo
        ),
      };
    }
    case "TOGGLE_TODO": {
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.index
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }
    case "SET_FILTER": {
      return {
        ...state,
        filter: action.payload.filter,
      };
    }
    case "SET_ALL_COMPLETED": {
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
      };
    }

    case "SET_ALL_UNCOMPLETED": {
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: false })),
      };
    }

    default: {
      return state;
    }
  }
};

export default todoReducer;
