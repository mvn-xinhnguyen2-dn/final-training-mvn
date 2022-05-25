import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./favSlice.js";
import loginSlice from "./loginSlice.js";
import userSlice from "./userSlice.js";

const store = configureStore({
  reducer: {
    fav: favSlice,
    user: userSlice,
    statusLogin: loginSlice
  },
});

export default store;
