import React from "react";
import styled from "styled-components";
import { FontSize, FontWeight, Color } from "src/types/ui";

interface ITypographyProps {
  size: FontSize;
  children: string | React.ReactNode;
  color?: Color;
  weight?: FontWeight;
  as?: string;
}

const Typography = styled.p<ITypographyProps>`
  font-size: ${(props) => props.theme.typography[props.size]}px;
  line-height: ${(props) => props.theme.typography[props.size] * 1.2}px;
  color: ${(props) => props.theme.colors[props.color || "dark"]};
  font-weight: ${(props) => props.weight || "400"};
`;
export default Typography;
