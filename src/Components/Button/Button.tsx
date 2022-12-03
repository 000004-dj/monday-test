import React from "react";

type PropsType = {
    buttonName: string
    number: number
    setNumber: (number:number)=>void
    changeNumber: (number: any)=>void
    buttonActivity: boolean
    buttonClass: string
}

export const Button = (props: PropsType) => {

  return (
      <>
          <button
              onClick = {props.changeNumber}
              disabled = {props.buttonActivity}
              className={props.buttonClass}

          >
              {props.buttonName}
          </button>
      </>
  )
}