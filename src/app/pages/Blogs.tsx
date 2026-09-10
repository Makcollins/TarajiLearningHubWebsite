import React from 'react'

const Blogs = () => {
    const blogs = [
        {id:1,title:"Taraji Hub Blog 1", description:"Taraji learning hub is an NGO focused on.", coverImg:"/gallery/tarajipaints.JPG"},
        {id:2,title:"Taraji Hub Blog 2", description:"Taraji learning hub is an NGO focused on.", coverImg:"/gallery/tarajipaints.JPG"},
        {id:3,title:"Taraji Hub Blog 3", description:"Taraji learning hub is an NGO focused on.", coverImg:"/gallery/tarajipaints.JPG"},
        {id:4,title:"Taraji Hub Blog 4", description:"Taraji learning hub is an NGO focused on.", coverImg:"/gallery/tarajipaints.JPG"},
        {id:5,title:"Taraji Hub Blog 5", description:"Taraji learning hub is an NGO focused on.", coverImg:"/gallery/tarajipaints.JPG"},
        {id:6,title:"Taraji Hub Blog 6", description:"Taraji learning hub is an NGO focused on.", coverImg:"/gallery/tarajipaints.JPG"},
    ]
  return (
    <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Blogs</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5'>
            {blogs.map((blog, index)=>(
                <div key={index} className='py-2 px-4 drop-shadow-md rounded-md bg-white overflow-hidden'>
                    <div className='rounded-md overflow-hidden'>
                        <img src={blog.coverImg} alt={`${blog.title} image`} />
                    </div>
                    <div className='py-2'>
                        <h2 className='font-bold text-gray-900 mb-1 text-nowrap text-ellipsis'>{blog.title}</h2>
                        <p className='text-sm text-gray-600 text-ellipsis'>{blog.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Blogs