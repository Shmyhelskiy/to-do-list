import { createStore } from "redux";

const defaultState = {
  Todo: [],
  Done: [],
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_POST":
      const newData = [...state.Todo, action.newPost];
      let counter = 0;
      newData.forEach((element, index) => (element.id = index));
      return { ...state, Todo: newData };

    case "CHANGE_DONE":
      const newDone = [...state.Done, action.newDone];
      newDone.forEach((element) => {
        element.isDone = true;
      });

      console.log(`newDone`, newDone);
      if (newDone[newDone.length - 1].isDone) {
        state.Todo.splice(newDone[newDone.length - 1].id, 1);
      }
      return { ...state, Done: newDone };
    case "CHANGE_TODO":
      const newToDo = [...state.Todo, action.newTodo];
      newToDo.forEach((element) => {
        element.isDone = false;
      });
      console.log(`newToDo`, newToDo);
      if (!newToDo[newToDo.length - 1].isDone) {
        state.Done.splice(newToDo[newToDo.length - 1].id, 1);
      }
      return { ...state, TOdo: newToDo };
    default:
      return state;
  }
}

let store = createStore(rootReducer);
export default store;
