import { auth } from "src/firebase/index";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

interface AuthCreds {
  email: string;
  password: string;
}

const googleProvider = new GoogleAuthProvider();

export const loginViaCreds = async (data: AuthCreds) => {
  const { email, password } = data;
  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signUpViaCreds = async (data: AuthCreds) => {
  const { email, password } = data;
  const user = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const authWithGoogle = async () => {
  const { user } = await signInWithPopup(auth, googleProvider);
  return {
    email: user.email,
    displayName: user.displayName,
    id: user.uid,
  };
};
