import styled from "styled-components";
import { Link } from "react-router-dom";
import { Select } from "antd";
import Button from "src/components/UI/Button";
import Input from "src/components/Form/Input";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const FormContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const LanguageSelect = styled(Select)`
  position: absolute;
  top: 50px;
  right: 24px;
  @media (max-width: 576px) {
    display: none;
  }
`;
