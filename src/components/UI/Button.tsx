import React from "react";
import styled from "styled-components";

interface IButtonProps {
  disabled?: boolean;
}

const Button = styled.button<IButtonProps>`
  border-radius: 6px;
  padding: 14px 24px;
  background-color: ${(props) =>
    props.theme.colors[props.disabled ? "greySecondary" : "primary"]};
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    opacity: 0.8;
    transition-duration: 0.3s;
  }
`;

export default Button;
