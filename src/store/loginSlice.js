import { createSlice } from "@reduxjs/toolkit";

const username = localStorage.getItem("user");
const initialState = {
  value: !!username,
};

export const loginSlice = createSlice({
  name: "statusLogin",
  initialState,
  reducers: {
    getStatusLogin: (state, value) => {
      state.value = value.payload;
    },
  },
});

export const { getStatusLogin } = loginSlice.actions;
export default loginSlice.reducer;
