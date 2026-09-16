import React from 'react';
import { Link } from "react-router";
import { blogs } from "../data/data";
import useFetch from '../hooks/useFetch'

const Blogs = () => {
      let {data, error, loading} = useFetch('http://localhost:1337/api/blogs?populate=*')

      if(loading){
        return <div>
            Loading...
        </div>
      }
      if(error){
        return <div>
            error occured
        </div>
      }
      
      
    return (
        <div className="max-w-7xl mx-auto py-5">
            <h1 className="text-sm sm:text-3xl font-light text-cyan-700 text-center">our Blogs</h1>
            <h1 className="text-xl sm:text-4xl font-bold text-gray-900 text-center">Blogs</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5'>
                {data.map((blog, index) => (
                    <Link to={`/blogs/${blog.id}`}>
                        <div key={index} className='py-2 px-4 drop-shadow-md rounded-md bg-white overflow-hidden'>
                            <div className='rounded-md overflow-hidden'>
                                <img src={blog.coverImg.url} alt={`${blog.coverImg.alternativeText} image`} />
                            </div>
                            <div className='py-2'>
                                <h2 className='font-bold text-gray-900 mb-1 text-nowrap text-ellipsis'>{blog.blogTitle}</h2>
                                <p className='text-sm text-gray-600 text-ellipsis'>{blog.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Blogs