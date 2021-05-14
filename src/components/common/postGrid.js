import PostCard from '../../components/common/postCard'
import BlogDescription from '../../components/blog/blogDescription'
import ProjectDescription from '../../components/project/projectDescription'
import CategoryDescription from '../category/categoryDescription';

const PostGrid = ({ blogs, type }) => {
  return (
    <div  className="flex flex-wrap container items-center">
      {blogs.map((blog) =>
      <div key={blog.id} className="w-full sm:w-1/2 lg:w-1/3 h-96 p-2 sm:p-4">
        
        {type==='blog' && 
        <PostCard card={blog} buttonText="Description" link={`/blogs/${blog.slug}`}>
          <BlogDescription blog={blog} />
        </PostCard>}

        {type==='project' && 
        <PostCard card={blog} buttonText="Description" link={`/projects/${blog.slug}`}>
          <ProjectDescription project={blog} />
        </PostCard>}

        {type==='category' && 
        <PostCard card={blog} buttonText="Description" link={`/categories/${blog.slug}`}>
          <CategoryDescription data={blog} />
        </PostCard>}
       
      </div>)}
    </div>
  );
}



export default PostGrid;