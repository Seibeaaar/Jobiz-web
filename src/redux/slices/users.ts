import { createSlice } from "@reduxjs/toolkit";
import { login, signUp } from "../thunks/users";

const initialState = {
  user: null,
  loading: false,
  error: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload as string;
    });
  },
});

export default usersSlice.reducer;
