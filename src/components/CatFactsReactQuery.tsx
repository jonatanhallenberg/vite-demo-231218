import { useQuery } from "react-query"
import { Link } from "react-router-dom"

export const CatFactsReactQuery = () => {

    const { isLoading, error, data } = useQuery('catFacts', () =>
        fetch('https://catfact.ninja/fact').then(res =>
            res.json()
        )
    )

    // const { data, loading, error } = useFetch("https://catfact.ninja/facts123");

    return <>
        <h1>Kattfakta</h1>
        <Link to="/">Startsida</Link>
        {isLoading && <div>Laddar...</div>}
        {error && <div style={{ color: "red" }}>{error as string}</div>}
        { !isLoading && !error && <div>{data.fact}</div>}
        {/* {!isLoading && !error && <ul>{data.data.map(catFact => <li>{catFact.fact}</li>)}</ul>} */}
    </>

}