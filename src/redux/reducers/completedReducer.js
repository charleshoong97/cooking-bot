import moment from "moment";
import { COMPLETE_ORDER } from "../constant";

const defaultState = [];

export const completedReducer = (
  state = defaultState,
  { type, payload = { order: {} } }
) => {
  const { order } = payload;
  switch (type) {
    case COMPLETE_ORDER:
      return [
        ...state,
        {
          ...order,
          completedOn: moment().toDate(),
        },
      ].sort((a, b) => b.completedOn.getTime() - a.completedOn.getTime());
    default:
      return state;
  }
};
