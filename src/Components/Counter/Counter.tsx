import React, {Dispatch, SetStateAction} from "react";
import classes from "./Counter.module.css";
import CounterBlock from "./CounterBlock";
import CounterButtons from "./CounterButtons";
import Noerror from "../Noerror";
import Error from "../Error";

type CounterPropsType = {
    counter: number
    incCounter: () => void
    resetCounter: () => void
    maxValue: number
    startValue: number
    error: boolean
    setError: Dispatch<SetStateAction<boolean>>

}

const Counter = ({counter, incCounter, resetCounter, maxValue, startValue, error, setError}: CounterPropsType) => {



    return (
        <div className={'counter'}>

            {!error ? <Noerror counter={counter} maxValue={maxValue}/> : <Error/>}


            <CounterButtons
                incCounter={incCounter}
                resetCounter={resetCounter}
                counter={counter}
                maxValue={maxValue}
                error={error}
            />
        </div>
    )
}

export default Counter