import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Typography from "../UI/Typography";
import { AppDispatch } from "src/redux/store";
import { authViaGoogle } from "src/redux/thunks/users";
import GoogleLogo from "src/assets/icons/google.svg";
import { useTranslation } from "react-i18next";

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
  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;

const GoogleAuth: React.FC<IGoogleAuthProps> = ({ mode }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const onPress = () => dispatch(authViaGoogle());
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
