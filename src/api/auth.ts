import { auth } from "src/firebase/index";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

interface AuthCreds {
  email: string;
  password: string;
}

export const loginViaCreds = async (data: AuthCreds) => {
  const { email, password } = data;
  await signInWithEmailAndPassword(auth, email, password);
};

export const signUpViaCreds = async (data: AuthCreds) => {
  const { email, password } = data;
  await createUserWithEmailAndPassword(auth, email, password);
};
