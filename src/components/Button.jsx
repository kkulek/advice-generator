import React from "react";
import styled from "styled-components";
import {colorPalette} from "../colorPallete";

export function Button({children}) {
    const Button = styled.a`
      position: absolute;
      height: 64px;
      width: 64px;
      border-radius: 50%;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      background-color: ${colorPalette.accent};
      background-image: url("../img/icon-dice.svg");
      transition: box-shadow 200ms;

      &:hover {
        box-shadow: 0 0 20px ${colorPalette.accent};
        cursor: pointer;
      }
    `
    return (
        <Button>
            {children}
        </Button>
    )
}