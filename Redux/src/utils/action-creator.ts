interface AnyAction<P> {
  type: string;
  payload: P;
}

type isTypeGuard<P> = (action: AnyAction<unknown>) => action is AnyAction<P>;

export interface ActionCreator<I, P> {
  (input: I): AnyAction<P>;
  isType: isTypeGuard<P>;
}

export const defineActionCreator =
  <I, P = I>(type: string) =>
  (payloadCreator: (input: I) => P): ActionCreator<I, P> => {
    const actionCreator = (input: I): AnyAction<P> => ({
      type,
      payload: payloadCreator(input),
    });
    // Action type guard for use in reducer
    actionCreator.isType = (
      action: AnyAction<unknown>,
    ): action is AnyAction<P> => {
      return action.type === type;
    };
    return actionCreator;
  };
