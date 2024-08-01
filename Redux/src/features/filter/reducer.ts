import { Reducer } from "redux";
import { FilterState } from "./type";
import { showCompleted } from "./actions";
import { ActionWithPayload } from "../../utils/action-creator";

export const filter: Reducer<FilterState, ActionWithPayload<void>> = (
  state,
  action,
) => {
  if (!state) return { value: "SHOW_ALL" };

  if (showCompleted.isType(action)) {
    return { value: "SHOW_COMPLETED" };
  } else return state;
};
