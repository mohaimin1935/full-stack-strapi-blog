import { HiOutlineBookOpen } from 'react-icons/hi'

import ButtonP from '../../components/common/buttonP'

export default function CategoryDescription({ data }) {
    return (
      <div className="absolute w-full bottom-6 text-white z-10 text-center flex justify-center">
        <div className="flex flex-col space-y-6 w-11/12 items-center">
  
          <div> {/***** description *****/}
            <h4 className="inline-block bangla font-bold text-2xl postCardTitle hover-line">
                {data.title}
            </h4>
            <div className="flex flex-wrap items-center justify-center space-x-4 text-sm">
              <div className="flex items-center">
              <span className="mr-3">
                <HiOutlineBookOpen />
              </span>
              <span>{data.blogs.length} Episodes</span>
              </div>

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