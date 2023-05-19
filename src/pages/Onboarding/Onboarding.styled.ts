import { Card } from "antd";
import Button from "src/components/UI/Button";
import Typography from "src/components/UI/Typography";
import { hex2rgba } from "src/utils/ui";
import styled from "styled-components";

export const Container = styled.main`
  margin: auto;
  height: 100vh;
  width: 50%;
  padding-top: 55px;
`;

export const Info = styled(Typography)`
  margin-top: 8px;
  margin-bottom: 48px;
`;

export const OptionsRow = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`;

export const Option = styled(Card)<{ selected: boolean }>`
  display: flex;
  flex-grow: 1;
  background-color: ${(props) =>
    props.selected
      ? hex2rgba(props.theme.colors.primary, 0.15)
      : "transparent"};
  .ant-card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const OptionImage = styled.img`
  max-width: 250px;
  max-height: 250px;
`;

export const PositionInfo = styled.div`
  margin-top: 15px;
  text-align: center;
`;

export const PositionDescription = styled(Typography)`
  margin-top: 8px;
`;

export const SubmitButton = styled(Button)`
  display: flex;
  margin: auto;
  margin-top: 40px;
`;
