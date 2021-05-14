import { HiOutlineBookOpen } from 'react-icons/hi'

import ButtonP from '../../components/common/buttonP'


export default function CategoryDescription({ data }) {
    return (
      <div className="absolute w-full bottom-6 text-white z-10 text-center flex justify-center">
        <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 items-center sm:space-x-16 md:space-x-24 lg:space-x-32">
  
          <div> {/***** description *****/}
            <h4 className="bangla font-bold text-3xl postCardTitle hover-line">
              {data.title}
            </h4>
            <div className="flex items-center justify-center">
              <span className="mr-3">
                <HiOutlineBookOpen />
              </span>
              <span>{data.blogs.length} Episodes</span>
            </div>
          </div>
  
          <div> {/***** button *****/}
            <ButtonP>
              Read Stories
            </ButtonP>
          </div>
  
        </div>
      </div>
    )
  }
  