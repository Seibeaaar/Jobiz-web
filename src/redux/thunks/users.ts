import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginViaCreds, signUpViaCreds } from "src/api/auth";
import i18n from "src/localization";

interface AuthCreds {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "users/login",
  async (payload: AuthCreds, { rejectWithValue }) => {
    try {
      await loginViaCreds(payload);
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
  async (payload: AuthCreds, { rejectWithValue }) => {
    try {
      await signUpViaCreds(payload);
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
