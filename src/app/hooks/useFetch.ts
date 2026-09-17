import { useEffect, useState } from 'react';
import { Blog } from '../models/models'
import { fetchBlogs } from '../api/apiblogs';

interface UseFetchResult {
    data: Blog[];
    loading: boolean;
    error: Error | null;
}

const useFetch = (): UseFetchResult => {
        const [data, setData] = useState<Blog[]>([]);
        const [error, setError] = useState<Error | null>(null);
        const [loading, setLoading] = useState(false);

        useEffect(()=>{
            fetchBlogs()
            .then((res) => setData(res.data))
            .catch((err) => setError(err instanceof Error ? err : Error(String(err))))
            .finally(()=> setLoading(false));
        }, []);

        return {data, loading, error};
}

// const useFetch = (url:string) => {
//     const [data, setData] = useState<Blog[]>([]);
//     const [error, setError] = useState<Error | null>(null);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true)
//             try {
//                 const res = await fetch(url);
//                 const json = await res.json();
//                 console.log(json.data);
//                 let dts:Blog[] = []

//                 for (const item of json.data) {
//                     const dt:Blog = {
//                         blogContent: item.blogContent,
//                         blogTitle: item.blogTitle,
//                         coverImg:item.coverImg,
//                         createdAt:item.createdAt,
//                         description:item.description,
//                         documentId:item.documentId,
//                         id:item.id,
//                         publishedAt:item.publishedAt,
//                         updatedAt:item.updatedAt
//                     }
//                     dts.push(dt);
//                 }

//                 setData(dts);
//             }
//             catch (error: any) {
//                 setError(error);
//             }
//             finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [url])
//     return {data, error, loading}
// }

export default useFetch