import { useAppDispatch } from "../../app/hooks";

const Filter = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="">
      <button
        className="rounded bg-primary p-3 text-primary-foreground"
        onClick={() =>
          dispatch({
            type: "SHOW_COMPLETED",
          })
        }
      >
        Show completed
      </button>
    </div>
  );
};

export default Filter;
