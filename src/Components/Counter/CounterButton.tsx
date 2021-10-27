import React from "react";
import classes from "./Counter.module.css";


type CounterButtonPropsType = {
    name: string
    callback: () => void
    disabled: boolean
}

const CounterButton = ({name,callback, disabled}:CounterButtonPropsType) => {

    const onClickHandler = () => {
        callback()
    }

    return(
        <button disabled={disabled} onClick={onClickHandler} className={classes.button}>{name}</button>
    )
}

export default  CounterButton