import React from "react";
import classes from "./Counter.module.css";
import CounterButton from "./CounterButton";
import {Simulate} from "react-dom/test-utils";


type CounterButtonsPropsType = {
    incCounter: () => void
    resetCounter: () => void
    counter: number
    maxValue: number
    error: boolean
}

const CounterButtons = ({incCounter,resetCounter, counter, maxValue, error}:CounterButtonsPropsType) => {
    return(
        <div className={classes.buttons}>
            <CounterButton disabled={counter === maxValue || error} name={'inc'} callback={incCounter}/>
            <CounterButton disabled={counter === 0} name={'reset'} callback={resetCounter}/>
        </div>
    )
}

export default  CounterButtons