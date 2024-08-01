import { AdjustCounterAction, ResetCounterAction } from "./type";

export const adjustCounter = (step: number): AdjustCounterAction => ({
  type: "ADJUST_COUNTER",
  payload: {
    step,
  },
});

export const resetCounter = (): ResetCounterAction => ({
  type: "RESET_COUNTER",
});
