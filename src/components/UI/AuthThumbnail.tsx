import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
import AuthImage from "src/assets/images/Auth.webp";
import Logo from "src/assets/images/Logo.webp";
import { useTranslation } from "react-i18next";

const Background = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  width: 40%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLogo = styled.img`
  width: 78px;
  height: 56px;
`;

const Header = styled(Typography)`
  margin: 13px 0 17px 0;
`;

const Info = styled(Typography)`
  min-height: 125px;
`;

const Thumbnail = styled.img`
  display: flex;
  max-width: 500px;
  max-height: 500px;
  margin-top: 15px;
  width: 40vw;
`;

const AuthThumbnail = () => {
  const { t } = useTranslation();
  return (
    <Background>
      <StyledLogo src={Logo} alt="Logo" />
      <Header as="h1" size="xxl" weight="700">
        {t("auth.thumbnail.title")}
      </Header>
      <Info as="h3" size="l">
        {t("auth.thumbnail.info")}
      </Info>
      <Thumbnail src={AuthImage} alt="Woman with todo list" />
    </Background>
  );
};

export default AuthThumbnail;
