import { useState, useEffect } from 'react'
import axios from 'axios'


import CommonHero from '../../components/common/commonHero'
import Loader from '../../components/common/loader'
import PostGrid from '../../components/common/postGrid'

const AllCategories = () => {

  const [categories, setCategories] = useState()

  useEffect(() => {
    getData()
    window.scrollTo(0, 0);
  }, [])

  async function getData() {
    let res = await axios.get('https://boiling-island-50404.herokuapp.com/categories')
    let data = res.data;
    setCategories(data)
  }

  return (
    <>
      <CommonHero title="All Series" />

      <section className="mt-16">

        <div className="container">
          {categories ?
            <PostGrid blogs={categories} type='category' />
            : <Loader />
          }
        </div>
        </section>
    </>
  );
}

export default AllCategories;