import { combineReducers, legacy_createStore } from "redux";
import { taskReducer } from "../features/tasks/reducer";
import { filter } from "../features/filter/reducer";
import { counterReducer } from "../features/counter/reducers";

const rootReducer = combineReducers({
  tasks: taskReducer,
  filter,
  counter: counterReducer,
});

const store = legacy_createStore(rootReducer);
store.subscribe(() => {
  const state = store.getState();

  console.log(state);
});

type AppStore = typeof store;
export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
