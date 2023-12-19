import { useState } from "react";

export const Cars = () => {

    // [ 3, (newValue) => void ]
    const [count, setCount] = useState(0);

    return <>
        <h1>Bilar</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>

        Count: {count}
    </>

}