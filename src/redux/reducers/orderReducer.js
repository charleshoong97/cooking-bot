import { ADD_ORDER, ASSIGN_ORDER, OFF_BOT } from "../constant";

const defaultState = [];

export const orderReducer = (
  state = defaultState,
  { type, payload = { order: {} } }
) => {
  const { order } = payload;

  switch (type) {
    case ADD_ORDER:
    case OFF_BOT:
      return !Boolean(order)
        ? state
        : [...state, order]
            .sort((a, b) => a.createdOn.getTime() - b.createdOn.getTime())
            .sort((a, b) => (a.VIP === b.VIP ? 0 : a.VIP ? -1 : 1));
    case ASSIGN_ORDER:
      return [...state.filter((prev) => prev.name !== order?.name)];
    default:
      return state;
  }
};
