import { v4 } from "uuid";
import { defineActionCreator } from "../../utils/action-creator";
import { TaskAction, TTask } from "./type";

export const addTask = defineActionCreator<
  TaskAction,
  Omit<TTask, "id">,
  TTask
>("ADD_TASK")((task) => ({ ...task, id: v4() }));

export const completedTask = defineActionCreator<TaskAction, { id: string }>(
  "COMPLETE_TASK",
)(({ id }) => ({ id }));

export const deleteTask = defineActionCreator<TaskAction, { id: string }>(
  "DELETE_TASK",
)(({ id }) => ({ id }));
