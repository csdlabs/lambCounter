import React from "react";
import CounterBlock from "./Counter/CounterBlock";


type NoerrorPropsType  = {
    counter: number
    maxValue: number
}

const Noerror = ({counter, maxValue}: NoerrorPropsType) => {
    return(
        <div>
            {counter === 0 ? <p className={'counter_entry-text'}>Enter values and press Set</p> : <CounterBlock counter={counter} maxValue={maxValue}/>}
        </div>
    )
}

export default Noerror