import React from "react";
import styled from "styled-components";
import {colorPalette} from "../colorPallete";
import dice from "../img/icon-dice.svg"

export function Button() {
    const Button = styled.a`
      position: absolute;
      height: 64px;
      width: 64px;
      border-radius: 50%;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      background-color: ${colorPalette.accent};
      transition: box-shadow 200ms;

      &:hover {
        box-shadow: 0 0 20px ${colorPalette.accent};
        cursor: pointer;
      }
      
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
      }
    `

    return (
        <Button>
            <img src={dice} alt="dice" />
        </Button>
    )
}