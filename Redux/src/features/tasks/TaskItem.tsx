import { useAppDispatch } from "../../app/hooks";
import { TTask } from "./type";

const TaskItem = (props: TTask) => {
  const dispatch = useAppDispatch();

  const toggleTask = () =>
    dispatch({
      type: "COMPLETE_TASK",
      payload: {
        id: props.id,
      },
    });

  return (
    <div className="mx-2 my-2 flex justify-between gap-2 rounded border px-3 py-2">
      <div className="space-y-1">
        <p className="text-lg font-bold">{props.name}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
      <div className="space-x-2">
        <button
          className="rounded bg-primary px-2 py-1 text-primary-foreground"
          onClick={() =>
            dispatch({ type: "DELETE_TASK", payload: { id: props.id } })
          }
        >
          -
        </button>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={toggleTask}
        />
      </div>
    </div>
  );
};

export default TaskItem;
