import React from "react";
import styled from "styled-components";
import {device} from "../mediaQueries";
import dividerDesktop from "../img/pattern-divider-desktop.svg";
import dividerMobile from "../img/pattern-divider-mobile.svg"

export function Divider() {
    const Divider = styled.picture`
      display: flex;
      align-items: center;
      justify-content: center;
    `

    return (
        <Divider>
            <source media={device.sm} srcSet={dividerDesktop}/>
            <source media={device.xxs} srcSet={dividerMobile}/>
            <img src={dividerDesktop} alt="divider"/>
        </Divider>
    )
}