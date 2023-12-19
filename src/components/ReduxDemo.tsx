import { useState } from "react";
import { increment, decrement } from "../feature/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

// Lägg till en knapp som har texten "Reset counter"
// När man klickar på knappen ska counter-värdet sättas till 0

export const ReduxDemo = () => {

    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value);

    return <>

        <h1>Redux demo component</h1>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        {count}
    </>
}