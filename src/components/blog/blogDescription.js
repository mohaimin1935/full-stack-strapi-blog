import { Link } from 'react-router-dom'


import { AiOutlineClockCircle } from 'react-icons/ai'
import { VscLibrary } from 'react-icons/vsc'

export default function BlogDescription({ blog }) {

  function timeCount(str) { 
    return Math.ceil(str.split(" ").length / 500);
  }

    return (
      <div className="absolute w-full bottom-2 text-white z-10 text-center flex justify-center">
        <div className="flex flex-col space-y-6 w-11/12 items-center">
  
          <div> {/***** description *****/}
            <h4 className="inline-block bangla font-bold text-2xl postCardTitle hover-line">
              {blog.title}
            </h4>
            <div className="flex flex-wrap items-center justify-center text-sm">
              <div className="flex items-center">
                <span className="mx-1">
                  <AiOutlineClockCircle />
                </span>
                <span>{timeCount(blog.body)} min read</span>
              </div>
  
              {blog.categories && blog.categories.length>0 &&
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
          </div>
  
          <div> {/***** button *****/}
            {/* <ButtonP>
              Read Story
            </ButtonP> */}
          </div>
  
        </div>
      </div>
    )
  }