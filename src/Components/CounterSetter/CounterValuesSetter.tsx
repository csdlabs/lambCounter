import React, {Dispatch, SetStateAction} from "react";
import ValueLine from "./ValueLine";

type CounterValuesSetterPropsType = {
    getStartInputValue: (value : number) => void
    getMaxInputValue: (value : number) => void
    setError: Dispatch<SetStateAction<boolean>>
    error: boolean
    maxValue: number
    starValue: number
}

const CounterValuesSetter = ({getStartInputValue, getMaxInputValue, setError, error, maxValue, starValue}:CounterValuesSetterPropsType) => {


    return(
        <div>
            <ValueLine name={'max value'} getInputValue={getMaxInputValue} setError={setError} error={error} value={maxValue}/>
            <ValueLine name={'start value'} getInputValue={getStartInputValue} setError={setError} error={error} value={starValue}/>
        </div>
    )
}

export default CounterValuesSetter