//const { count, increment, decrement } = useCounter(0);

import { useState } from "react"

export const useCounter = (initialValue) => {

    const [ count, setCount ] = useState(initialValue);

    return {
        count: count,
        increment: () => setCount(count + 1),
        decrement: () => setCount(count - 1)
    }

}