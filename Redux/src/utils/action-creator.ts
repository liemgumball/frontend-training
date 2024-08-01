import { ActionCreator, Action } from "redux";

export interface ActionWithPayload<P> extends Action {
  payload?: P;
}

type isTypeGuard<P> = (
  action: ActionWithPayload<unknown>,
) => action is ActionWithPayload<P>;

export const defineActionCreator =
  <A extends string, I, P = I>(type: A) =>
  (
    payloadCreator: (input: I) => P,
  ): ActionCreator<ActionWithPayload<P>> & { isType: isTypeGuard<P> } => {
    const actionCreator = (input: I): ActionWithPayload<P> => ({
      type,
      payload: payloadCreator(input),
    });
    // Action type guard for use in reducer
    actionCreator.isType = (
      action: ActionWithPayload<unknown>,
    ): action is ActionWithPayload<P> => {
      return action.type === type;
    };
    return actionCreator;
  };
