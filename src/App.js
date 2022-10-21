import {useState, useEffect} from "react";
import {Main} from "./components/Main";
import {Card} from "./components/Card";
import {AdviceNum} from "./components/AdviceNum";
import {AdviceCopy} from "./components/AdviceCopy";
import {ButtonDice} from "./components/Button";
import {Divider} from "./components/Divider";


function App() {
    const [advice, setAdvice] = useState({
        slip: {
            id: '',
            advice: ''
        }
    });

    const fetchAdvice = async () => {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = response.json()
        setAdvice(await data)
    }

    useEffect(() => {
        fetchAdvice();
    }, [])

    return (
        <Main>
            <Card>
                <AdviceNum>
                    Advice #{advice.slip.id}
                </AdviceNum>
                <AdviceCopy>
                    {advice.slip.advice}
                </AdviceCopy>
                <Divider/>
                <ButtonDice onClick={fetchAdvice}/>
            </Card>
        </Main>
    )
}

export default App;