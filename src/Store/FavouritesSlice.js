import { createSlice } from "@reduxjs/toolkit";

const FavouritesSlice = createSlice({
  name: "favourites",
  initialState: [],
  reducers: {
    toggleFavourite: (state, action) => {
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) {
        return state.filter((item) => item.id !== action.payload.id);
      }
      state.push(action.payload);
    },
  },
});

export const { toggleFavourite } = FavouritesSlice.actions;
export default FavouritesSlice.reducer;
