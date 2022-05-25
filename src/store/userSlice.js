import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getInfoUser: (state, value) => {
      state.value = value.payload;
    },
  },
});

export const { getInfoUser } = userSlice.actions;
export default userSlice.reducer;
