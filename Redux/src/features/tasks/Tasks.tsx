import { v4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import TaskItem from "./TaskItem";

const Tasks = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.data);
  const status = useAppSelector((state) => state.tasks.status);

  const addTask = () =>
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: v4(),
        name: `Name-${v4().slice(0, 3)}`,
        completed: false,
      },
    });

  if (status === "loading")
    return (
      <p className="flex animate-spin justify-center text-2xl font-extrabold">
        C
      </p>
    );

  return (
    <div className="">
      <header className="container my-4">
        <button
          className="rounded bg-primary px-3 py-2 text-primary-foreground hover:bg-primary/70"
          onClick={addTask}
        >
          +
        </button>
      </header>
      <ul className="container">
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem {...task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
