import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import { HiOutlineBookOpen } from 'react-icons/hi'

import PostGrid from '../../components/common/postGrid'
import CommonHero from '../../components/common/commonHero'
import Loader from '../../components/common/loader'
import FeaturedSlider from '../../components/common/featuredSlider'


const SingleCategory = () => {

  const [blogs, setBlogs] = useState()
  const [featuredBLogs, setFeaturedBlogs] = useState()
  const [title, setTitle] = useState()

  const { slug } = useParams()

  useEffect(() => {
    getData()
    window.scrollTo(0, 0);
  }, [slug])

  async function getData() {
    setBlogs(null)
    setTitle(null)
    setFeaturedBlogs(null)
    let res = await axios.get(`https://boiling-island-50404.herokuapp.com/categories?slug=${slug}`)
    let data = res.data[0].blogs
    data.sort(compare)
    //.slice(0,6)
    setTitle(res.data[0].title)
    setBlogs(data)
  
    let featuredData = data.filter((blog) => blog.featured)
    setFeaturedBlogs(featuredData.slice(0, 5))
  }

  function compare( a, b ) {
    if ( a.created_at > b.created_at ){
      return -1;
    }
    if ( a.created_at < b.created_at ){
      return 1;
    }
    return 0;
  }

  return (
    <>
      {title && blogs ? <div className="bangla">
        <CommonHero title={title}>
          <div className="flex flex-wrap items-center justify-center space-x-4 text-lg my-4">
            <div className="flex items-center english">
              <span className="mr-3">
                <HiOutlineBookOpen />
              </span>
              <span>{blogs.length} Episodes</span>
            </div>

          </div>
        </CommonHero>
      </div> : <CommonHero />}

      <div className="container">

        <section className="my-20">{featuredBLogs ?
          <><FeaturedSlider data={featuredBLogs} type='blog' /></>
          : <Loader />
        }</section>

        <section className="my-20">
          {blogs ?
            <PostGrid blogs={blogs} type='blog' />
            : <Loader />
          }
        </section>

      </div>
    </>
  );
}


export default SingleCategory;