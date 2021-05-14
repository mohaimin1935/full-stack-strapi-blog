import { useState } from 'react'


import { FiChevronRight } from 'react-icons/fi'
import { FiChevronLeft } from 'react-icons/fi'

import PostCard from '../../components/common/postCard'
import FeaturedCategoryDescription from '../../components/category/featuredCategoryDescription'
import FeaturedBlogDescription from '../../components/blog/featuredBlogDescription'

const FeaturedSlider = ({ data, type }) => {

  const [slidingRight, setSlidingRight] = useState(false)
  const [slidingLeft, setSlidingLeft] = useState(false)
  const [active, setActive] = useState(0)

  function slideToRight() {
    if (!slidingRight) {
      setSlidingRight(true)
      setTimeout(() => {
        setActive(prev => prev === data.length - 1 ? 0 : prev + 1)
      }, 400);
      setTimeout(() => {
        setSlidingRight(false)
      }, 800);
    }
  }

  function slideToLeft() {
    if (!slidingLeft) {
      setSlidingLeft(true)
      setTimeout(() => {
        setActive(prev => prev === 0 ? data.length - 1 : prev - 1)
      }, 400);
      setTimeout(() => {
        setSlidingLeft(false)
      }, 800);
    }
  }

  return (
    <>
      <div className={slidingRight ? "h-96 sliderRight" : slidingLeft ? "h-96 sliderLeft" : "h-96"}>
        {/* <PostCard card={data[active]} buttonText={"Read Stories"} link={`categories/${data[active].slug}`}>

          {type==='category' && <FeaturedCategoryDescription data={data[active]} />}
          {type==='blog' && <FeaturedBlogDescription data={data[active]} />}

        </PostCard> */}

        {type==='blog' && data && data.length>0 &&
        <PostCard card={data[active]} buttonText="Read Story" link={`/blogs/${data[active].slug}`}>
          <FeaturedBlogDescription data={data[active]} />
        </PostCard>}

        {type==='category' && 
        <PostCard card={data[active]} buttonText="Read Stories" link={`/categories/${data[active].slug}`}>
          <FeaturedCategoryDescription data={data[active]} />
        </PostCard>}

      </div>

      {data && data.length>0 &&
      <Indicator
        data={data}
        active={active}
        slideToRight={slideToRight}
        slideToLeft={slideToLeft}
      />}
    </>
  );
}

function Indicator({ data, active, slideToRight, slideToLeft }) {
  return (
    <>
      {/***** indicator *****/}
      <div className="flex justify-center items-center mt-8">
        <div className=" w-10 h-10 rounded-full bg-gray-200 shadow-xl flex 
        justify-center items-center hover:shadow-md duration-300 hover:bg-gray-300
        cursor-pointer transform hover:-translate-x-1" onClick={slideToLeft}>
          <FiChevronLeft size='20px' />
        </div>

        {data.map((d, index) => {
          return (
            <div key={index}>
              <div
                className={`w-${active === index ? 2 : 1} h-${active === index ? 2 : 1} 
                rounded-full bg-gray-500 self-center mx-1.5 duration-300 linear`}
              ></div>
            </div>
          )
        })}

        <div className=" w-10 h-10 rounded-full bg-white shadow-xl flex bg-gray-200
        justify-center items-center hover:shadow-md duration-300 hover:bg-gray-300
        cursor-pointer transform hover:translate-x-1" onClick={slideToRight}>
          <FiChevronRight size='20px' />
        </div>
      </div>
    </>
  )
}

export default FeaturedSlider;