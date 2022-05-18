import React, { useEffect, useState } from "react";
const defaultAxios = require("axios").default;

export const useAxios = (opts, axiosInstance = defaultAxios) => {
    if (!opts.url) return;

    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    });
    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true,
        });
        setTrigger(Date.now());
    };

    useEffect(() => {
        axiosInstance(opts)
            .then((data) => {
                setState({
                    ...state,
                    loading: false,
                    data,
                });
            })
            .catch((error) => {
                setState({ ...state, loading: false, error });
            });
    }, [trigger]);

    return { ...state, refetch };
};

export const App = () => {
    const { loading, data, error, refetch } = useAxios({
        url: "https://yts.mx/api/v2/list_movies.json",
    });

    console.log(data);

    return (
        <div>
            <h1>{data && data.status}</h1>
            <h3>{loading && "Loading now..."}</h3>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
};
