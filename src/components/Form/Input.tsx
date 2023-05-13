import React from "react";
import Typography from "../UI/Typography";
import styled from "styled-components";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

interface IInputprops extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  secure?: boolean;
  onSecurePress?(): void;
}

const InputWrapper = styled.div`
  position: relative;
`;

const PasswordIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 16px;
  cursor: pointer;
`;

const StyledInput = styled.input<IInputprops>`
  border-radius: 6px;
  padding: 12px 16px;
  background-color: ${(props) => props.theme.colors.greySecondary};
  color: ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.typography.s}px;
  &::placeholder {
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: ${(props) => props.theme.typography.s}px;
  }
  width: 100%;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.errorMessage ? props.theme.colors["danger"] : "transparent"};
  margin-bottom: ${(props) => (props.errorMessage ? 5 : 0)}px;
`;

const Input: React.FC<IInputprops> = (props) => (
  <InputWrapper>
    <StyledInput {...props} />
    {props.errorMessage ? (
      <Typography color="danger" size="xs">
        {props.errorMessage}
      </Typography>
    ) : null}
    {props.secure ? (
      <PasswordIcon onClick={props.onSecurePress}>
        {props.type === "password" ? <EyeOutlined /> : <EyeInvisibleOutlined />}
      </PasswordIcon>
    ) : null}
  </InputWrapper>
);

export default Input;
