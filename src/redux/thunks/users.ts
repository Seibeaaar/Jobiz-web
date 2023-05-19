import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginViaCreds, signUpViaCreds, authWithGoogle } from "src/api/auth";
import i18n from "src/localization";

interface AuthCreds {
  email: string;
  password: string;
}

interface SignUpCreds extends AuthCreds {
  firstName: string;
  lastName: string;
}

export const login = createAsyncThunk(
  "users/login",
  async (payload: AuthCreds, { rejectWithValue }) => {
    try {
      const user = await loginViaCreds(payload);
      return user;
    } catch (e: any) {
      const { t } = i18n;
      let errorMessage = "";
      switch (e.code) {
        case "auth/user-not-found":
          errorMessage = t("auth.errors.notFound");
          break;
        default:
          errorMessage = t("auth.errors.general");
      }
      return rejectWithValue(errorMessage);
    }
  }
);

export const signUp = createAsyncThunk(
  "users/signUp",
  async (payload: SignUpCreds, { rejectWithValue }) => {
    try {
      const { email, password, firstName, lastName } = payload;
      const user = await signUpViaCreds({
        email,
        password,
      });
      return {
        ...user,
        firstName,
        lastName,
      };
    } catch (e: any) {
      const { t } = i18n;
      let errorMessage = "";
      switch (e.code) {
        case "auth/email-already-in-use":
          errorMessage = t("auth.errors.alreadyUsed");
          break;
        default:
          errorMessage = t("auth.errors.general");
      }
      return rejectWithValue(errorMessage);
    }
  }
);

export const authViaGoogle = createAsyncThunk(
  "users/google",
  async (payload, { rejectWithValue }) => {
    try {
      const user = await authWithGoogle();
      return user;
    } catch (e: any) {
      const { t } = i18n;
      let errorMessage = "";
      switch (e.code) {
        default:
          errorMessage = t("auth.errors.general");
      }
      return rejectWithValue(errorMessage);
    }
  }
);
