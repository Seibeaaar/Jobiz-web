import "styled-components";
import { FontSize, Color } from "src/types/ui";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      [key in Color]: string;
    };
    typography: {
      [key in FontSize]: number;
    };
  }
}
