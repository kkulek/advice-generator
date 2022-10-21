import styled from "styled-components";
import {colorPalette} from "../colorPallete";

export const AdviceCopy = styled.p`
  color: ${colorPalette.veryLight};
  text-align: center;
  position: relative;
  font-size: 28px;
  font-weight: 800;
  font-family: "Manrope", sans-serif;

  &:before {
    content: url("../img/pattern-divider-mobile.svg");
    position: absolute;
    top: 80px;
    left: 0;
  }
`