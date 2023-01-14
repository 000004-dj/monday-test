import React from "react";
import s from "./CounterDisplay.module.css"

type PropsType = {
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