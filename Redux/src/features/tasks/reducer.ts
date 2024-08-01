import { Reducer } from "redux";
import { TaskState, TTask } from "./type";
import { ActionWithPayload } from "../../utils/action-creator";
import { addTask, completedTask, deleteTask } from "./actions";

export const initialState: TaskState = {
  data: [],
  status: "idle",
};

export const taskReducer: Reducer<TaskState, ActionWithPayload<unknown>> = (
  state,
  action,
) => {
  if (!state) return initialState;

  if (addTask.isType(action)) {
    return {
      ...state,
      data: [...state.data, action.payload as TTask],
    };
  } else if (completedTask.isType(action)) {
    const found = state.data.find((t) => t.id === action.payload?.id);
    if (found) found.completed = !found.completed;
    return { ...state, data: Array.from(state.data) };
  } else if (deleteTask.isType(action)) {
    return {
      ...state,
      data: state.data.filter((t) => t.id !== action.payload?.id),
    };
  } else {
    return state;
  }
};
