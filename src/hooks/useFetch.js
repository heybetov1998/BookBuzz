import { useEffect, useState } from "react";

const proxy = "https://dot-radical-crocodile.glitch.me/";

const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);

            try {
                const response = await fetch(proxy + url, options);
                const data = await response.json();

                setData(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [url, options]);

    return { data, error, loading };
};
export default useFetch;
