import React, {useEffect} from "react";
import s from "./Counter.module.css"
import {CounterDisplay} from "../CounterDisplay/CounterDisplay";
import {Button} from "../Button/Button";
import {buttonName} from "../../redux/state";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {changeCounterNumberAC} from "../../redux/counter-reducer";




export const Counter = () => {
    // const [number, setNumber] = useState(0)


    const {number} = useSelector<AppStateType, any>((state)=> state.counterReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            dispatch(changeCounterNumberAC(newValue))
        }
    }, [dispatch])

    const getNextNumber = () => dispatch(changeCounterNumberAC(number + 1))
    const clearingResult = () => dispatch(changeCounterNumberAC(number - number))
    const buttonActivityReset = !number
    const buttonDisabledINC = false
    const numberLimit = number >= 5 ? 5 : number

    const buttonClassReset = buttonActivityReset ? "activeButton" : "button"
    const buttonClassINC = numberLimit === 5 ? "activeButton" : "button"

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(number))
    }, [number])

    return (
        <div className={s.counterParent}>
            <CounterDisplay
                numberLimit={numberLimit}/>

            <div>
                <Button
                    buttonName={buttonName[0].name}
                    changeNumber={getNextNumber}
                    buttonActivity={buttonDisabledINC}
                    buttonClass={buttonClassINC}
                />
                <Button
                    buttonName={buttonName[1].name}
                    changeNumber={clearingResult}
                    buttonActivity={buttonActivityReset}
                    buttonClass={buttonClassReset}
                />
            </div>
        </div>
    )
}


