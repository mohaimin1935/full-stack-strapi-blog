import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import SectionTitle from "../../components/common/sectionTitle"
import Loader from '../../components/common/loader'
import ButtonS from '../../components/common/buttonS'
import PostGrid from '../../components/common/postGrid'

const Blog = () => {

  const [blogs, setBlogs] = useState()

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    let res = await axios.get('https://boiling-island-50404.herokuapp.com/blogs?_sort=created_at:DESC&_limit=6')
    let data = res.data.slice(0,6);
    setBlogs(data)
  }

  return (
    <section id="blog" className="mt-16 sm:mt-24 md-mt-32 bg-green-50 bg-opacity-75 radius-top py-16">
      <div className="container">
        <SectionTitle>
          Blogs
        </SectionTitle>

        <div>
          {blogs ?
            <PostGrid blogs={blogs} type='blog' />
            : <Loader />
          }
        </div>

        <Link to='/blogs' className="block text-center my-16">
          <ButtonS>
            All Blogs
          </ButtonS>
        </Link>

      </div>
    </section>
  );
}


export default Blog;