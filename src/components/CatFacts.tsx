import { useState, useEffect } from "react";

// 1. Uppdatera komponenten så att den istället anropar 'https://catfact.ninja/facts'
// 2. Anpassa hur datan skrivs ut (använd .map eftersom vi har en lista)
// 3. Ändra namnsättningen så att det avspeglar lista (plural)

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