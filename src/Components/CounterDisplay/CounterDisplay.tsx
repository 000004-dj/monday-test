import React from "react";
import {ButtonNameType} from "../redux/state";
import s from "./CounterDisplay.module.css"

type PropsType = {
    buttonName: Array<ButtonNameType>
    number: number
    setNumber: (number:number)=>void
    changeNumber: (number:number)=>void
    numberLimit: number
}

export const CounterDisplay = (props: PropsType) => {

    const classOfNumber = props.numberLimit === 5 ? "numberActive" : "number"


    return (
        <div className={s.display}>
            <span className={classOfNumber}>{props.numberLimit}</span>
        </div>
    )
}