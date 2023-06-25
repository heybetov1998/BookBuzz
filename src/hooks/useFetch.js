import { useEffect, useState } from "react";

const useFetch = (url, options = "1") => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);

            let data = null;

            // if (options)
            data = await fetch(url, options)
                .then((response) => response.json())
                .catch((err) => setError(err))
                .finally(() => setLoading(false));
            // else
            //     data = await fetch(`${url}`)
            //         .then((response) => response.json())
            //         .catch((err) => setError(err))
            //         .finally(() => setLoading(false));

            setData(data);
        })();
    }, [url, options]);

    return { data, error, loading };
};
export default useFetch;

// const fetchPage = async (url) => {
//     const response = await fetch(url, { mode: "no-cors" });

//     return await response.text();
// };

// const clickButton = (pageContent, buttonSelector) => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(pageContent, "text/html");

//     const button = doc.querySelector(buttonSelector);

//     if (button) {
//         button.click();
//         console.log("Button clicked successfully!");
//     } else {
//         console.log("Button not found on the page.");
//     }
// };

// const targetUrl = "https://cors-anywhere.herokuapp.com/corsdemo";
// const buttonSelector = "input[type='submit']";
