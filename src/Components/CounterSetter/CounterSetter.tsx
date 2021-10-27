import React, {Dispatch, SetStateAction} from "react";
import CounterButtons from "../Counter/CounterButtons";
import CounterButton from "../Counter/CounterButton";
import CounterValuesSetter from "./CounterValuesSetter";
import classes from "./CounterSetter.module.css";
import {Simulate} from "react-dom/test-utils";
import {log} from "util";


type CounterSetterPropsType = {
    setCounterValue: (value : number) => void
    getStartInputValue: (value : number) => void
    getMaxInputValue: (value : number) => void
    maxValue: number
    starValue: number
    counter: number
    error: boolean
    setError: Dispatch<SetStateAction<boolean>>
    disabled: boolean
 }

const CounterSetter = ({setCounterValue,getStartInputValue, maxValue, counter , getMaxInputValue, starValue, error, setError, disabled}: CounterSetterPropsType) => {



    return(
        <div className={'counter'}>
            <CounterValuesSetter getStartInputValue={getStartInputValue} getMaxInputValue={getMaxInputValue} setError={setError} error={error} maxValue={maxValue} starValue={starValue}/>
            <CounterButton name={'Set'} callback={()=>{setCounterValue(counter)}} disabled={ disabled }/>
        </div>
    )
}

export default CounterSetter