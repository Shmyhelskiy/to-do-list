import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

export const defaultState = {
  Todo: [],
  Done: [],
};
function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_POST":
      const newData = [...state.Todo, action.newPost];
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, Todo: newData })
      );
      return { ...state, Todo: newData };

    case "CHANGE_DONE":
      const copyTodo = [...state.Todo];
      const Done = action.newDone;
      Done.isDone = true;

      if (Done.isDone) {
        const findIdndex = state.Todo.findIndex((item) => item.id === Done.id);
        copyTodo.splice(findIdndex, 1);
      }

      const newDone = [...state.Done, Done];
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, Todo: copyTodo, Done: newDone })
      );
      return { ...state, Todo: copyTodo, Done: newDone };

    case "CHANGE_TODO":
      const copyDone = [...state.Done];
      const ToDo = action.newTodo;
      ToDo.isDone = false;

      if (!ToDo.isDone) {
        const findIdndex = state.Done.findIndex((item) => item.id === ToDo.id);
        copyDone.splice(findIdndex, 1);
      }
      const newToDo = [...state.Todo, ToDo];
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, Done: copyDone, Todo: newToDo })
      );
      return { ...state, Done: copyDone, Todo: newToDo };

    case "CLEAN_LIST":
      localStorage.setItem("state", JSON.stringify(defaultState));
      return defaultState;

    case "CREATE_STATE":
      const lastState = JSON.parse(localStorage.getItem("state"));
      return lastState;
    default:
      return state;
  }
}

let store = createStore(rootReducer, composeWithDevTools());
export default store;
