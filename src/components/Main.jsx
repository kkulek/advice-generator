import React from "react";
import styled from "styled-components";
import {colorPalette} from "../colorPallete";

export function Main({children}) {
    const Main = styled.main`
      @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');
      background-color: ${colorPalette.background};
      width: 100vw;
      height: 100vh;
      display: flex;
    `

    return (
        <Main>
            {children}
        </Main>
    )
}