export type Counter = number;

export type CounterState = {
  value: Counter;
};

export type AdjustCounterAction = {
  type: "ADJUST_COUNTER";
  payload: {
    step: number;
  };
};

export type ResetCounterAction = {
  type: "RESET_COUNTER";
};

export type CounterActions = AdjustCounterAction | ResetCounterAction;
