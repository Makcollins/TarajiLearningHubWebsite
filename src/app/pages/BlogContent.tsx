import { useParams, Link } from 'react-router';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../api/apiblogs';
// import {
//   BlocksRenderer,
//   type BlocksContent,
// } from "@strapi/blocks-react-renderer";

const BlogContent = () => {
  const {data:blogs, loading, error} = useFetch();
      if(loading){
        return <div>
            Loading...
        </div>
      }
      if(error){
        console.log(error)
        return <div>
            error occured
        </div>
      }
  const { id } = useParams();

  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) {
    return <div>
      <h2>Item not found!</h2>
      <Link to='/blogs' >Go Back</Link>
    </div>
  }
  return (
    <div className="max-w-7xl mx-auto">
      <div className='my-3 sm:my-10'>
        <div className="flex flex-col justify-center items-center mb-5 px-2">
          <p className="text-md text-red-400 text-light">FEATURED</p>
          <h1 className='text-3xl sm:text-3xl font-semibold'>{blog.blogTitle}</h1>
          <p className=''>{blog.description}</p>
        </div>
        <div className='md:h-[400px] overflow-hidden'>
          <img src={BASE_URL+blog.coverImg.url} alt={`${blog.coverImg.alternativeText}`} />
        </div>
        <div className='max-w-6xl mx-auto mt-10 p-6'>
          <div>
            {/* <BlocksRenderer content={blog.blogContent}/> */}
          </div>
          {/* <div className='flex gap-2 items-center mt-10'>
            <div className='rounded-full overflow-hidden w-12 h-12 border-4 border-gray-600'>
              <img className='w-auto h-12' src={blog.author_profile} alt={blog.authorName} />
            </div>
            <div>
              <p className='font-bold'>{blog.authorName}</p>
              <p>{blog.authorRole}</p>
            </div>
          </div> */}
        </div>

      </div>
    </div>
  )
}

export default BlogContent