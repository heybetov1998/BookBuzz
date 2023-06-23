import { useEffect, useState } from "react";

const useData = (url) => {
    const [data, setData] = useState();

    useEffect(() => {
        const dataFetch = async () => {
            const requestedData = await (await fetch(url)).json();

            setData(requestedData);
        };

        dataFetch();
    }, []);

    return { data };
};

export default useData;
