import { useState, useEffect } from 'react'
import axios from 'axios'

import CommonHero from '../../components/common/commonHero'
import SectionTitle from '../../components/common/sectionTitle'
import FeaturedSlider from '../../components/common/featuredSlider'
import PostGrid from '../../components/common/postGrid'
import Loader from '../../components/common/loader'

const AllBlogs = () => {

  const [blogs, setBlogs] = useState()
  const [featuredBLogs, setFeaturedBlogs] = useState()

  useEffect(() => {
    getData()
    window.scrollTo(0, 0)
  }, [])

  async function getData() {
    let res = await axios.get('https://boiling-island-50404.herokuapp.com/blogs?_sort=created_at:DESC')
    let data = res.data;
    setBlogs(data)

    let featuredData = data.filter((blog) => blog.featured)
    setFeaturedBlogs(featuredData.slice(0,5))
  }

  console.log(featuredBLogs)

  return (
    <>
      <CommonHero title="Blogs" />

      <div className="container">
        <section>
          <SectionTitle>Featured Blogs</SectionTitle>
          {featuredBLogs && featuredBLogs.length > 0 ?
            <><FeaturedSlider data={featuredBLogs} type='blog' /></>
            : <Loader />
          }
        </section>

        <section className="mt-16 sm:mt-24 md-mt-32">
          <SectionTitle>All Blogs</SectionTitle>

          <div>
          {blogs ?
            <PostGrid blogs={blogs} type='blog' />
            : <Loader />
          }
        </div>
        </section>

      </div>
    </>
  );
}

export default AllBlogs;