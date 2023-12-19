import { useState, useEffect } from "react";

export const CatFact = () => {

    const [ data, setData ] = useState()
    
    useEffect(() => {
        getCatFact()
    }, [])

    const getCatFact = async () => {
        const res = await fetch("https://catfact.ninja/fact");
        const data = await res.json()
        setData(data);
    }

    return <>
        <h1>Kattfakta</h1>
        <button onClick={() => getCatFact()}>Hämta kattfakta</button>
        <div>{data?.fact}</div>
    </>

}