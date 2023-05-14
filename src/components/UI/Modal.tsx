import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

interface IModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ children }) => (
  <Overlay>{children}</Overlay>
);

export default Modal;
