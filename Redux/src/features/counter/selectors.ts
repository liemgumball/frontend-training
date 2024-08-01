import { CounterState } from "./type";

export const negativeCounterSelector = (state: CounterState) =>
  state.value < 0 ? "negative" : state.value;
