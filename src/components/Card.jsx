import React from "react";
import styled from "styled-components";
import {colorPalette} from "../colorPallete";

export function Card({children}) {
    const Card = styled.div`
      background-color: ${colorPalette.dark};
      width: 90%;
      min-height: 315px;
      margin: auto;
      border-radius: 10px;
      position: relative;
      padding: 40px 20px 80px;
      box-sizing: border-box;
      max-width: 540px;
      box-shadow: 30px 50px 80px 5px ${colorPalette.cardShadow};
    `

    return (
        <Card>
            {children}
        </Card>
    )
}