import React from "react";
import classes from "./Counter.module.css";


type CounterBlockPropsType = {
    counter: number
    maxValue: number

}

const CounterBlock = ({counter, maxValue}:CounterBlockPropsType) => {



    return (
        <p className={`${classes.text} ${counter === maxValue ? classes.error : ''}`}>{counter}</p>
    )
}

export default CounterBlock