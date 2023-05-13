import React from "react";
import styled from "styled-components";
import Typography from "../UI/Typography";
import GoogleLogo from "src/assets/icons/google.svg";
import { useTranslation } from "react-i18next";
import { auth } from "src/firebase";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

interface IGoogleAuthProps {
  mode: "login" | "signUp";
}

const GoogleButton = styled.button`
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.lightBlue};
  padding: 14px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition-duration: 0.3s;
  }
`;

const GoogleAuth: React.FC<IGoogleAuthProps> = ({ mode }) => {
  const { t } = useTranslation();

  const onPress = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error);
      });
  return (
    <GoogleButton onClick={onPress}>
      <img src={GoogleLogo} alt="Google logo" />
      <Typography size="m" color="primary" weight="700">
        {t(`auth.${mode}.google`)}
      </Typography>
    </GoogleButton>
  );
};

export default GoogleAuth;
