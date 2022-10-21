import React from "react";
import styled from "styled-components";
import {device} from "../mediaQueries";
import dividerDesktop from "../img/pattern-divider-desktop.svg";
import dividerMobile from "../img/pattern-divider-mobile.svg"

const Container = styled.picture`
  display: flex;
  align-items: center;
  justify-content: center;
`

export function Divider() {
    return (
        <Container>
            <source media={device.sm} srcSet={dividerDesktop}/>
            <img src={dividerMobile} alt="divider"/>
        </Container>
    )
}