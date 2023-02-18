// import { Link } from "react-router-dom"

const Blog = ({ blog, setSelectedId }) => {
  return (
    <div className='blog'>
      <div className='light-font-weight date-font light-text-color'>
        {blog.datePublished}
      </div>
      <div>
        <button
          onClick={() => setSelectedId(blog.id)}
          className='no-txt-decor black blue-on-hover blog-link'
        >
          <h1 className='medium-font-weight'>{blog.title}</h1>
        </button>
      </div>
      <div className='light-font-weight light-text-color'>
        {blog.description}
      </div>
      <button onClick={() => setSelectedId(blog.id)} className='custom-button'>Read More</button>
    </div>
  )
}

export default Blog
