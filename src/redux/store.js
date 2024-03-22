import { configureStore } from "@reduxjs/toolkit";
import { orderReducer } from "./reducers/orderReducer";
import { botReducer } from "./reducers/botReducer";
import { completedReducer } from "./reducers/completedReducer";
import { executeReducer } from "./reducers/executeReducer";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    bot: botReducer,
    completed: completedReducer,
    executing: executeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
