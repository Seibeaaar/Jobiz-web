import { createSlice } from "@reduxjs/toolkit";
import { login, signUp, authViaGoogle } from "../thunks/users";

const initialState = {
  user: {},
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
    builder.addCase(signUp.fulfilled, (state, action) => {
      const {
        user: { email, uid },
        firstName,
        lastName,
      } = action.payload;
      state.user = {
        id: uid,
        email,
        firstName,
        lastName,
      };
    });
    builder.addCase(authViaGoogle.fulfilled, (state, action) => {
      const { email, displayName, id } = action.payload;
      const [firstName, lastName] = (displayName || " ").split(" ");
      state.user = {
        id,
        email,
        firstName,
        lastName,
      };
    });
    builder.addCase(authViaGoogle.rejected, (state, action) => {
      state.error = action.payload as string;
    });
  },
});

export default usersSlice.reducer;
