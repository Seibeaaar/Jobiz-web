import styled from "styled-components";
import Input from "src/components/Form/Input";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;
