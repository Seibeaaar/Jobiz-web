import React from "react";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import { hex2rgba } from "src/utils/ui";

const Container = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => hex2rgba(props.theme.colors.lightGrey, 0.25)};
  border: none;
  cursor: pointer;
`;

const CloseIcon = styled(CloseOutlined)`
  font-size: 15px;
  color: ${(props) => props.theme.colors.lightGrey};
`;

interface ICloseButtonProps {
  onClick(): void;
}

const CloseButton: React.FC<ICloseButtonProps> = ({ onClick }) => (
  <Container onClick={onClick}>
    <CloseIcon />
  </Container>
);

export default CloseButton;
