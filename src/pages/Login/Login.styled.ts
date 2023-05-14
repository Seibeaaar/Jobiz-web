import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "src/components/UI/Button";
import Input from "src/components/Form/Input";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const FormContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    flex-grow: 0.5;
  }
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const PasswordRow = styled(Row)`
  justify-content: space-between;
`;

export const RedirectLink = styled(Link)`
  text-decoration: none;
`;

export const LoginForm = styled.form`
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 25px;
  display: block;
  height: fit-content;
`;

export const LoginInput = styled(Input)`
  margin-top: 8px;
`;

export const ControlsRow = styled(Row)`
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Submit = styled(Button)`
  @media (max-width: 576px) {
    width: 100%;
  }
`;
