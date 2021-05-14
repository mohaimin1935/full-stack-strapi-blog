import { useState, useEffect } from 'react'
import axios from 'axios'

import SectionTitle from "../../components/common/sectionTitle"
import Loader from '../../components/common/loader'
import FeaturedSlider from '../../components/common/featuredSlider'
import ButtonS from '../../components/common/buttonS'
import { Link } from 'react-router-dom'

const Featured = () => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    setLoading(true)
    getData()
    setLoading(false)
  }, [])

  async function getData() {
    let res = await axios.get('https://boiling-island-50404.herokuapp.com/categories')
    let featuredData = res.data.filter((category) => category.featured)

    setData(featuredData.slice(0,5))
  }

  return (
    <section className="mt-12" id="featured">
      <div className="container">
        <SectionTitle>Featured Series</SectionTitle> {/***** title *****/}
        {data ?
          <><FeaturedSlider data={data} type='category' /></>
          : <Loader />}
        
        <Link to='/categories' className='block text-center my-16'>
          <ButtonS>
            Browse All Series
          </ButtonS>
        </Link>

      </div>

    </section>
  );
}



export default Featured;