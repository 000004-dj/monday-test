import React, {useState} from "react";
import s from "./Counter.module.css"
import {CounterDisplay} from "../CounterDisplay/CounterDisplay";
import {Button} from "../Button/Button";
import {buttonName} from "../redux/state";



export const Counter = () => {

    const [number, setNumber] = useState(0)
    const getNextNumber = () => setNumber(number + 1)
    const clearingResult = () => setNumber(number - number)
    const buttonActivityReset =  number  ? false : true
    const buttonDisabledINC = false
    const numberLimit = number >= 5 ? 5 : number

    const buttonClassReset = buttonActivityReset ? "activeButton" : "button"
    const buttonClassINC = numberLimit === 5 ?  "activeButton" : "button"



    return (
        <div className={s.counterParent}>
            <CounterDisplay
                number = {number}
                buttonName={buttonName}
                setNumber = {setNumber}
                changeNumber ={getNextNumber}
                numberLimit={numberLimit}/>
            <div>
                <Button
                    buttonName ={buttonName[0].name}
                    number={number}
                    setNumber = {setNumber}
                    changeNumber ={getNextNumber}
                    buttonActivity = {buttonDisabledINC}
                    buttonClass = {buttonClassINC}
                />
                <Button
                    buttonName ={buttonName[1].name}
                    number={number}
                    setNumber = {setNumber}
                    changeNumber ={clearingResult}
                    buttonActivity = {buttonActivityReset}
                    buttonClass = {buttonClassReset}
                />

            </div>

            
        </div>
    )
}


