import React from 'react'
import { useSelector } from 'react-redux'
import {  useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../app/slice/counterSlice'
function Data() {
    const data = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    console.log(data);

    return (
        <div>
            <button onClick={() => dispatch(increment())}>{data}</button>
            <button onClick={() => dispatch(decrement())}>{data}</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>{data}</button>
        </div>
    )
}

export default Data
