import { COMPLETE_ORDER, EXECUTE_ORDER } from "../constant";

const defaultState = [];

export const executeReducer = (
  state = defaultState,
  { type, payload = { order: {} } }
) => {
  const { order } = payload;

  switch (type) {
    case EXECUTE_ORDER:
      return [...state, order];
    case COMPLETE_ORDER:
      return [...state.filter((prev) => prev.name !== order?.name)];
    default:
      return state;
  }
};
