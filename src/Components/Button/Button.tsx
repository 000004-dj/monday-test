import React from "react";

type PropsType = {
    buttonName?: string
    changeNumber?: (number: any)=>void
    buttonActivity?: boolean
    buttonClass?: string
    onClick?: ()=> void
}

export const Button = (props: PropsType) => {

  return (
      <>
          <button
              onClick = {props.changeNumber ? props.changeNumber : props.onClick }
              disabled = {props.buttonActivity}
              className={props.buttonClass}

          >
              {props.buttonName}
          </button>
      </>
  )
}