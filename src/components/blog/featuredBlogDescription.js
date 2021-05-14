import { Link } from 'react-router-dom'

import { AiOutlineClockCircle } from 'react-icons/ai'
import { VscLibrary } from 'react-icons/vsc'

import ButtonP from '../../components/common/buttonP'


export default function FeaturedBlogDescription({ data }) {
  
  function timeCount(str) { 
    return Math.ceil(str.split(" ").length / 500);
  }
  
  return (
      <div className="absolute w-full bottom-6 text-white z-10 text-center flex justify-center">
        <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 items-center sm:space-x-16 md:space-x-24 lg:space-x-32">
  
          <div> {/***** description *****/}
            <h4 className="bangla font-bold text-3xl postCardTitle hover-line">
              {data.title}
            </h4>
            <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
                <span className="mx-1">
                  <AiOutlineClockCircle />
                </span>
                <span>{timeCount(data.body)} min read</span>
              </div>
  
              {data.categories && data.categories.length>0 &&
                <div className="flex items-center">
                  <span className="mx-1">
                    <VscLibrary />
                  </span>
                  {data.categories.map(category => 
                    <Link to={`/categories/${category.slug}`} className="hover-line bangla" key={category.id}>{category.title}</Link>
                  )}
                </div>
              }
            </div>
          </div>
  
          <div> {/***** button *****/}
            <ButtonP>
              Read Story
            </ButtonP>
          </div>
  
        </div>
      </div>
    )
  }
  