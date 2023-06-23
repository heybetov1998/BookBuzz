import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);

            const data = await fetch(url)
                .then((response) => response.json())
                .catch((err) => setError(err))
                .finally(() => setLoading(false));

            setData(data);
        })();
    }, [url]);

    return { data, error, loading };
};

export default useFetch;

// const useData = (url) => {
//     const [data, setData] = useState();

//     useEffect(() => {
//         const dataFetch = async () => {
//             const requestedData = await (await fetch(url)).json();

//             setData(requestedData);
//         };

//         dataFetch();
//     }, []);

//     return { data };
// };

// export default useData;
