import React, {Dispatch, SetStateAction} from "react";
import {log} from "util";
import {on} from "cluster";

type ValueLinePropsType = {
    name: string
    getInputValue: (value : number) => void
    setError: Dispatch<SetStateAction<boolean>>
    error: boolean
    value: number
}


const ValueLine = ({name, getInputValue, setError, error, value}:ValueLinePropsType) => {

    const onChangeHandler = (e: any) => {
        const inputValue = +e.currentTarget.value
        getInputValue(inputValue)
        if ( inputValue < 0 ){
            setError(true)
        }
    }

    return(
        <div className={'valueLine'}>
            <p>{name}</p>
            <input value={value} type="number" onChange={ onChangeHandler} className={ error ? 'errorInput' : ''}/>
        </div>
    )
}
export default ValueLine