import { useEffect, useState } from "react";

//const { data, loading, error } = useFetch("https://catfact.ninja/facts123");
export const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        const getCatFact = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const data = await res.json()
                setData(data.data);
            } catch (e) {
                console.log('e', e);
                setError("Något gick fel!")
            } finally {
                setLoading(false);
            }
        }

        getCatFact()
    }, [url])


    return {
        data: data,
        loading: loading,
        error: error
    }
}