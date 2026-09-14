import React from 'react';
import { Link } from "react-router";
import { blogs } from "../data/data";

const Blogs = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-light text-gray-900 text-center">our Blogs</h1>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Blogs</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5'>
                {blogs.map((blog, index) => (
                    <Link to={`/blogs/${blog.slug}`}>
                        <div key={index} className='py-2 px-4 drop-shadow-md rounded-md bg-white overflow-hidden'>
                            <div className='rounded-md overflow-hidden'>
                                <img src={blog.coverImg} alt={`${blog.title} image`} />
                            </div>
                            <div className='py-2'>
                                <h2 className='font-bold text-gray-900 mb-1 text-nowrap text-ellipsis'>{blog.title}</h2>
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