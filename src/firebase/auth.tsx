import React, { createContext, useState } from "react";
import { auth } from ".";
import { User } from "firebase/auth";

export const AuthContext = createContext<{
  user: User | null;
}>({
  user: null,
});

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [authedUser, setAuthedUser] = useState<User | null>(null);

  auth.onAuthStateChanged((user) => {
    setAuthedUser(user);
  });

  return (
    <AuthContext.Provider
      value={{
        user: authedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
