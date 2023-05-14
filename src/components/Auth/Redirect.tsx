import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Typography from "../UI/Typography";

interface IRedirectProps {
  to: string;
  question: string;
  linkLabel: string;
}

const RedirectRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  /* @media (max-width: 576px) {
    flex-direction: column;
    margin-top: 16px;
  }  */
`;

const RedirectLink = styled(Link)`
  text-decoration: none;
  margin-left: 4px;
  /* @media (max-width: 576px) {
    margin-left: 0;
  } */
`;

const AuthRedirect: React.FC<IRedirectProps> = ({
  to,
  linkLabel,
  question,
}) => (
  <RedirectRow>
    <Typography size="m" color="lightGrey">
      {question}
    </Typography>
    <RedirectLink to={to}>
      <Typography size="m" color="primary">
        {linkLabel}
      </Typography>
    </RedirectLink>
  </RedirectRow>
);

export default AuthRedirect;
