import { useEffect, useState } from "react";

function useCurrency(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        if (!currency) return;
        const cur = currency.toLowerCase();
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${cur}.json`)
            .then((res) => res.json())
            .then((res) => {
                if (res && res[cur]) {
                    setData(res[cur])
                }
            })
            .catch((err) => {
                console.error("Failed to fetch currency:", err)
            })
    }, [currency])

    return data || {}
}

export default useCurrency