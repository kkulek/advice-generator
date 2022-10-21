import React from "react";
import styled from "styled-components";
import {colorPalette} from "../colorPallete";

export function AdviceNum({children}) {
    const AdviceNum = styled.p`
      color: ${colorPalette.accent};
      text-align: center;
      font-size: 13px;
      font-weight: 900;
      letter-spacing: 3.5px;
      text-transform: uppercase;
      font-family: "Manrope", sans-serif;
      margin-bottom: 27px;
    `

    return (
        <AdviceNum>
            {children}
        </AdviceNum>
    )
}