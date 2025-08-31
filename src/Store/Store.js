import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Features/Cart/CartSlice";
import { APISlice } from "../Features/API/APISlice";

export const store = configureStore({
  reducer: {
    [APISlice.reducerPath]: APISlice.reducer,
    cart: CartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APISlice.middleware),
});
