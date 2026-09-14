import { useParams, Link } from 'react-router';
import { blogs } from '../data/data';

const BlogContent = () => {
  const { slug } = useParams();

  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return <div>
      <h2>Item not found!</h2>
      <Link to='/blogs' >Go Back</Link>
    </div>
  }
  return (
    <div className="max-w-7xl mx-auto">
      <div className='my-10'>
        <div className="flex flex-col justify-center items-center mb-5">
          <p className="text-md text-red-400 text-light">FEATURED</p>
          <h1 className='text-3xl sm:text-3xl font-semibold'>{blog.title}</h1>
          <p className=''>{blog.description}</p>
        </div>
        <div className='md:h-[400px] overflow-hidden'>
          <img src={blog.coverImg} alt={slug} />
        </div>
        <div className='max-w-6xl mx-auto mt-10'>
          {blog.content}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus iusto repudiandae veniam amet eveniet earum sit, impedit atque, quis mollitia in cumque placeat cum quaerat, eos nisi minus! Incidunt repudiandae sint harum nam distinctio deserunt, quod dolorum ducimus consectetur earum omnis at laborum suscipit dolore id maxime dicta totam neque illum provident ut sapiente non numquam! Eveniet suscipit quas beatae enim consectetur voluptas eaque nesciunt a iste corrupti delectus quae nostrum, expedita minima quibusdam dolore laboriosam, doloribus libero. Laborum cumque vero, iure officia, incidunt obcaecati quas eveniet neque deleniti repellendus maxime numquam accusamus rem a aperiam sequi quis id ratione magni consectetur praesentium! Nobis aperiam suscipit laboriosam assumenda necessitatibus animi rem maxime? Cum adipisci asperiores quidem tempore consequuntur autem cumque nostrum error eligendi et, inventore consectetur numquam nobis commodi, quos eius deserunt est temporibus eos vitae. Quia vero consequatur omnis aspernatur asperiores consectetur alias eligendi laborum, nemo non. Corrupti corporis non fugiat dolorem nemo eaque, ipsa porro aliquam expedita consequuntur molestias nam consequatur minus soluta nihil voluptates repudiandae dolor culpa sint? Fugit sit voluptatibus quia eaque saepe ipsam nostrum! Est quam obcaecati accusamus, et voluptate rem reprehenderit, inventore architecto pariatur totam exercitationem perferendis minus libero mollitia sapiente. Quasi, reprehenderit.
        </div>
        <div className='flex gap-2 items-center mt-10'>
          <div className='rounded-full overflow-hidden w-12 h-12 border-4 border-gray-600'>
            <img className='w-auto h-12' src={blog.author_profile} alt={blog.authorName} />
          </div>
          <div>
            <p className='font-bold'>{blog.authorName}</p>
            <p>{blog.authorRole}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogContent