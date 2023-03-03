import { createStore } from "redux";

const defaultState = {
  Todo: [],
  Done: [],
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_POST":
      const newData = [...state.Todo, action.newPost];
      return { ...state, Todo: newData };

    case "CHANGE_DONE":
      const newDone = [...state.Done, action.newDone];
      newDone.forEach((element) => {
        element.isDone = true;
      });
      if (newDone[newDone.length - 1].isDone) {
        state.Todo.splice(newDone[newDone.length - 1].id, 1);
      }
      return { ...state, Done: newDone };
    case "CHANGE_TODO":
      const newToDo = [...state.Todo, action.newTodo];
      console.log(newToDo);
      // if (!newToDo[newToDo.length - 1].isDone) {
      //   state.Todo.splice(newToDo[newToDo.length - 1].id, 1);
      //   return { ...state, TOdo: newToDo };
      // }
      break;
    default:
      return state;
  }
}

let store = createStore(rootReducer);
export default store;
