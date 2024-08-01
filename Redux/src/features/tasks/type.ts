export type TTask = {
  id: string;
  name: string;
  description?: string;
  completed: boolean;
};

export type TaskState = {
  data: TTask[];
  status: "loading" | "fetching" | "idle" | "error";
  error?: unknown;
};

export type TaskAction = "ADD_TASK" | "COMPLETE_TASK" | "DELETE_TASK";
