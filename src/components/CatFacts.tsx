import { useFetch } from "../hooks/useFetch";

// 1. Uppdatera komponenten så att den istället anropar 'https://catfact.ninja/facts'
// 2. Anpassa hur datan skrivs ut (använd .map eftersom vi har en lista)
// 3. Ändra namnsättningen så att det avspeglar lista (plural)

export const CatFacts = () => {
    const { data, loading, error } = useFetch("https://catfact.ninja/facts123");

    return <>
        <h1>Kattfakta</h1>
        {loading && <div>Laddar...</div>}
        {error && <div style={{ color: "red" }}>{error}</div>}
        {!loading && !error && <ul>{data.map(catFact => <li>{catFact.fact}</li>)}</ul>}
    </>

}