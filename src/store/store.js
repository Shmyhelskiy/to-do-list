import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const defaultState = {
  Todo: [],
  Done: [],
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_POST":
      const newData = [...state.Todo, action.newPost];
      newData.forEach((element, index) => (element.id = index));
      return { ...state, Todo: newData };

    case "CHANGE_DONE":
      console.log(state);
      const newDone = [...state.Done, action.newDone];
      const id = action.id;
      newDone.forEach((element) => {
        element.isDone = true;
      });

      if (newDone[newDone.length - 1].isDone) {
        state.Todo.splice(newDone[id].id, 1);
      }

      return { ...state, Done: newDone };

    case "CHANGE_TODO":
      const newToDo = [...state.Todo, action.newTodo];
      newToDo.forEach((element) => {
        element.isDone = false;
      });
      if (!newToDo[newToDo.length - 1].isDone) {
        state.Done.splice(newToDo[newToDo.length - 1].id, 1);
      }
      return { ...state, Todo: newToDo };

    default:
      return state;
  }
}

let store = createStore(rootReducer, composeWithDevTools());
export default store;
