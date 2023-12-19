import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchCatFacts } from "../feature/cat/catSlice";

export const CatFactsRedux = () => {

    const dispatch = useDispatch();
    const facts = useSelector(state => state.cat.facts);

    useEffect(() => {
        dispatch(fetchCatFacts())
    }, [])
    
    return <>
        <h1>Kattfakta</h1>
        {/* {/* {loading && <div>Laddar...</div>}
        {error && <div style={{ color: "red" }}>{error}</div>} */}
        <ul>{facts.map(catFact => <li>{catFact.fact}</li>)}</ul>
    </>

}