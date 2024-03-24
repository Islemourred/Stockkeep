import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
};

const adminSlice = createSlice({
  name: "admin",
  initialState, // Utiliser initialState au lieu de initilaState
  reducers: {
    changeQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { changeQuery } = adminSlice.actions;

export default adminSlice.reducer;
