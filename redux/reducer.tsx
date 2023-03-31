import { createSlice } from "@reduxjs/toolkit";

// import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
const initialState = {
  client: {
    toggleForm: false,
  },
};
export const ReducerSlice = createSlice({
  name: "CRUDAPP",
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      state.client.toggleForm = !state.client.toggleForm;
    },
  },
});
export const { toggleChangeAction } = ReducerSlice.actions;
export default ReducerSlice.reducer;
