import { useEffect, useState } from "react";

const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);

            let data = null;

            if (options)
                data = await fetch(
                    `https://cors-anywhere.herokuapp.com/${url}`,
                    options
                )
                    .then((response) => response.json())
                    .catch((err) => setError(err))
                    .finally(() => setLoading(false));
            else
                data = await fetch(`https://cors-anywhere.herokuapp.com/${url}`)
                    .then((response) => response.json())
                    .catch((err) => setError(err))
                    .finally(() => setLoading(false));

            setData(data);
        })();
    }, [url, options]);

    return { data, error, loading };
};

export default useFetch;
