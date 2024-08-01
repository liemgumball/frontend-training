import { defineActionCreator } from "../../utils/action-creator";
import { FilterValue } from "./type";

export const showCompleted = defineActionCreator<FilterValue, void>(
  "SHOW_COMPLETED",
)(() => {});
