import styled from "styled-components";
import {device} from "./mediaQueries";
import {colorPalette} from "./colorPallete";

const Main = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');
  background-color: ${colorPalette.background};
  width: 100vw;
  height: 100vh;
  display: flex;
`

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

const AdviceCopy = styled.p`
  color: ${colorPalette.veryLight};
  text-align: center;
  position: relative;
  font-size: 28px;
  font-weight: 800;
  font-family: "Manrope", sans-serif;

  &:before {
    content: url("./img/pattern-divider-mobile.svg");
    position: absolute;
    top: 80px;
    left: 0;
  }
`

const Button = styled.a`
  position: absolute;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: ${colorPalette.accent};
  background-image: url("./img/icon-dice.svg");
  transition: box-shadow 200ms;
  
  &:hover {
    box-shadow: 0 0 20px ${colorPalette.accent};
    cursor: pointer;
  }
`

function App() {
    return (
        <Main>
            <Card>
                <AdviceNum>
                    Advice #117
                </AdviceNum>
                <AdviceCopy>
                    “It is easy to sit up and take notice, what's difficult is getting up and taking
                    action.”
                </AdviceCopy>
                <Button/>
            </Card>
        </Main>
    )
}

export default App;