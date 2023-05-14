import styled from "styled-components";
import { hex2rgba } from "src/utils/ui";
import Typography from "src/components/UI/Typography";
import Button from "src/components/UI/Button";

export const Container = styled.main`
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 26px;
  border-bottom: 1px solid
    ${(props) => hex2rgba(props.theme.colors.lightGrey, 0.25)};
`;

export const Content = styled.form`
  margin: auto;
  max-width: 500px;
  padding-top: 50px;
`;

export const FormInfo = styled(Typography)`
  margin-top: 8px;
  margin-bottom: 32px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 32px;
  width: 100%;
`;
