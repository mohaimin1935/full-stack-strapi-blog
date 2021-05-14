import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import 'katex/dist/katex.min.css'

import { AiOutlineClockCircle } from 'react-icons/ai'
import { VscLibrary } from 'react-icons/vsc'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

import CommonHero from '../../components/common/commonHero'
import Loader from '../../components/common/loader'
import Markdown from '../../components/blog/markdown'
import PostCard from '../../components/common/postCard'
import BlogDescription from '../../components/blog/blogDescription'


const SingleBlog = () => {

  const [blog, setBlog] = useState()

  const { slug } = useParams()


  useEffect(() => {
    getData()
    window.scrollTo(0, 0);
  }, [slug])

  async function getData() {
    setBlog(null)
    let res = await axios.get(`https://boiling-island-50404.herokuapp.com/blogs?slug=${slug}`)
    let data = res.data[0]
    setBlog(data)
    console.log(data)
  }

  const _renderContent = (content) => (
    <Markdown children={content} />
  );

  return (

    <>
      {blog ? <div className="bangla">
        <CommonHero title={blog.title}>
          <MetaData blog={blog} />
        </CommonHero>
      </div> : <><CommonHero /><div className='container'><Loader /></div></>}

      <div className="container">
        {blog &&
          <>
            {blog.featureImage && <img src={`${blog.featureImage.url}`} className='w-full mt-8 mb-24 object-cover rounded-xl shadow-md' style={{ maxHeight: '600px' }} alt="" />}
            <div className="blog-body">
              {console.log(blog.body.length)}
              {_renderContent(blog.body)}
            </div>

            <div className='mt-24 text-center flex flex-col w-full sm:flex-row justify-center items-center'>
              {blog.previous && <div className='w-full h-96 p-2 sm:p-4 mb-16 sm:mb-0'>
                <div className="flex justify-center items-center space-x-2 mb-4">
                  <div><BsArrowLeft size='24px' /></div>
                  <h4 className="text-2xl sm:text-3xl font-semibold dark-text">
                    Previous
                  </h4>
                </div>
                <PostCard card={blog.previous} link={`/blogs/${blog.previous.slug}`}>
                  <BlogDescription blog={blog.previous} />
                </PostCard>
              </div>}
              {blog.next && <div className='w-full h-96 p-2 sm:p-4'>
                <div className="flex justify-center items-center space-x-2 mb-4">
                  <h4 className="text-2xl sm:text-3xl font-semibold dark-text">
                    Next
                </h4>
                  <div><BsArrowRight size='24px' /></div>
                </div>
                <PostCard card={blog.next} link={`/blogs/${blog.next.slug}`}>
                  <BlogDescription blog={blog.next} />
                </PostCard>
              </div>}
            </div>
          </>
        }
      </div>

    </>
  );
}


function MetaData({ blog }) {
  
  function timeCount(str) { 
    return Math.ceil(str.split(" ").length / 500);
  }


  return (
    <div className="flex flex-wrap items-center justify-center space-x-4 my-4 text-lg">
      <div className="flex items-center english">
        <span className="mx-1">
          <AiOutlineClockCircle />
        </span>
        <span>{timeCount(blog.body)} min read</span>
      </div>

      {blog.categories && blog.categories.length > 0 &&
        <div className="flex items-center">
          <span className="mx-1">
            <VscLibrary />
          </span>
          {blog.categories.map(category =>
            <Link to={`/categories/${category.slug}`} className="hover-line bangla" key={category.id}>{category.title}</Link>
          )}
        </div>
      }

    </div>
  )
}

export default SingleBlog;