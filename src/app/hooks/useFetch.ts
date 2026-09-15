// import {useEffect, useState} from 'react';

// const useFetch = ( )=> {

//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const url:string = '';

//     

//     return {loading, error, data}
// } 

// export default useFetch 
import { useEffect, useState } from 'react';

const useFetch = (url:string) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            }
            catch (error: any) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url])
    return {data, error, loading}
}

export default useFetch