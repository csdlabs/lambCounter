import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Components/Counter/Counter";
import CounterSetter from "./Components/CounterSetter/CounterSetter";

function App() {


    let [counter, setCounter] = React.useState(0)

    let [maxValue, setMaxvalue] = React.useState(0)

    let [startValue, setStartValue] = React.useState(0)

    let [error, setError] = React.useState(false)

    let [disabled, setDisabled] = React.useState(false)

    useEffect( () => {
        let valueAsString = localStorage.getItem('counterValue')
        if ( valueAsString ){
            let newValue = JSON.parse(valueAsString)
            setCounter(newValue)
        }
    }, [] )

    useEffect( () => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter] )
    //
    useEffect( () => {
        let startValueAsString = localStorage.getItem('startValue')
        if ( startValueAsString ){
            let newValue = JSON.parse(startValueAsString)
            setStartValue(newValue)
        }
    }, [] )

    useEffect( () => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue] )
    //
    useEffect( () => {
        let maxValueAsString = localStorage.getItem('maxValue')
        if ( maxValueAsString ){
            let newValue = JSON.parse(maxValueAsString)
            setMaxvalue(newValue)
        }
    }, [] )

    useEffect( () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    },[maxValue] )


    const getStartInputValue = (value : number) => {
        setStartValue(value)
        startValue = value
        if (startValue < 0) {
            setError(true)
            setDisabled(true)
        }
        else if(startValue === maxValue){
            setError(true)
            setDisabled(true)
        }
        else if(startValue > maxValue){
            setError(true)
            setDisabled(true)
        }
        else{
            setError(false)
            setDisabled(false)
        }

    }

    const getMaxInputValue = (value :number) => {
        setMaxvalue(value)
        maxValue = value

        if (maxValue < 0) {
            setError(true)
            setDisabled(true)
        }
        else if( maxValue === startValue ){
            setError(true)
            setDisabled(true)
        }
        else if ( startValue > maxValue){
            setError(true)
            setDisabled(true)
        }
        else if ( startValue < 0 ){
            setError(true)
            setDisabled(true)
        }
        else {
            setError(false)
            setDisabled(false)
        }
    }

    const setCounterValue = () => {
        setCounter(startValue)
        setDisabled(true)
        if ( startValue === maxValue  ){
            setError(true)
        }
        else if ( startValue > maxValue){
            setError(true)
        }
        else if ( startValue < 0 ){
            setError(true)
        }
        else {
            setError(false)
        }
    }

    const resetCounter = () => {
        if (counter > 0 && counter <= maxValue){
            setCounter(startValue)
        }
    }


    const incCounter = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }

    }


    return (
        <div className="App">


            <CounterSetter
                setCounterValue={setCounterValue}
                getStartInputValue={getStartInputValue}
                getMaxInputValue={getMaxInputValue}
                maxValue={maxValue}
                starValue={startValue}
                counter={counter}
                error={error}
                setError={setError}
                disabled={disabled}
            />
            <Counter
                counter={counter}
                incCounter={incCounter}
                resetCounter={resetCounter}
                maxValue={maxValue}
                startValue={startValue}
                error={error}
                setError={setError}
            />
        </div>
    );
}

export default App;
