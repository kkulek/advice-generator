import {Main} from "./components/Main";
import {Card} from "./components/Card";
import {AdviceNum} from "./components/AdviceNum";
import {AdviceCopy} from "./components/AdviceCopy";
import {Button} from "./components/Button";
import {Divider} from "./components/Divider";


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
                <Divider />
                <Button/>
            </Card>
        </Main>
    )
}

export default App;