import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  users: [],
  consumers: [],
  structures: [],
  roles: [],
  permissions: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState, // Utiliser initialState au lieu de initilaState
  reducers: {
    changeQuery(state, action) {
      state.searchQuery = action.payload;
    },
    modifyUsers(state, action) {
      state.users = action.payload;
    },
    modifyConsumers(state, action) {
      state.consumers = action.payload;
    },
    modifyStructures(state, action) {
      state.structures = action.payload;
    },
    modifyRoles(state, action) {
      state.roles = action.payload;
    },
    modifyPermissions(state, action) {
      state.permissions = action.payload;
    },
  },
});

export const {
  changeQuery,
  modifyUsers,
  modifyConsumers,
  modifyStructures,
  modifyRoles,
  modifyPermissions,
} = adminSlice.actions;

export default adminSlice.reducer;
