// import {useEffect, useState} from 'react';

// const useFetch = ( )=> 
import { useEffect, useState } from 'react';
// import {Blog} from '../models/models'

const useFetch = (url:string) => {
    const [data, setData] = useState<Blog[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url);
                const json = await res.json();
                console.log(json.data);
                let dts:Blog[] = []

                for (const item of json.data) {
                    const dt:Blog = {
                        blogContent: item.blogContent,
                        blogTitle: item.blogTitle,
                        coverImg:item.coverImg,
                        createdAt:item.createdAt,
                        description:item.descrition,
                        documentId:item.documentId,
                        id:item.id,
                        publishedAt:item.publishedAt,
                        updatedAt:item.updatedAt
                    }
                    dts.push(dt);
                }
                
                setData(dts);
            }
            catch (error: any) {
                setError(error);
                console.log(error);
                
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