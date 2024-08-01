import { Reducer } from "redux";
import { CounterActions, CounterState } from "./type";

const initialState: CounterState = { value: 0 };

export const counterReducer: Reducer<CounterState, CounterActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "ADJUST_COUNTER":
      return {
        ...state,
        value: state.value + action.payload.step,
      };

    case "RESET_COUNTER":
      return initialState;

    default:
      return state as never;
  }
};
