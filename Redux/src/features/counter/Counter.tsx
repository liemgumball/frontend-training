import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { adjustCounter, resetCounter } from "./actions";
import { negativeCounterSelector } from "./selectors";

const Counter = () => {
  const counter = useAppSelector((state) =>
    negativeCounterSelector(state.counter),
  );

  const dispatch = useAppDispatch();

  return (
    <div>
      <p className="text-primary-foreground">{counter}</p>
      <div className="space-x-2">
        <button onClick={() => dispatch(adjustCounter(1))}>Add</button>
        <button onClick={() => dispatch(adjustCounter(-1))}>minus</button>
        <button onClick={() => dispatch(resetCounter())}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
