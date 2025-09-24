import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Features/Cart/CartSlice";
import { APISlice } from "../Features/API/APISlice";
import FavouritesReducer from "./FavouritesSlice";

export const store = configureStore({
  reducer: {
    [APISlice.reducerPath]: APISlice.reducer,
    cart: CartReducer,
    favourites: FavouritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APISlice.middleware),
});
