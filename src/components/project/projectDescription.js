import { AiFillGithub, AiFillEye } from 'react-icons/ai'


export default function ProjectDescription({ project }) {
  const stopEvent = (event) => event.stopPropagation();


  return (
    <>

      <div className="absolute w-full bottom-6 text-white z-10 text-center flex justify-center">
        <div className="relative flex flex-col space-y-4 w-11/12 items-center">

          <div className="flex justify-center space-x-4 z-30"> {/***** button *****/}
            {project.github &&
              <a onClick={stopEvent} href={project.github} target="_blank"
                className='hover:bg-green-400 duration-300 w-10 h-10 bg-white 
            rounded-full dark-text flex justify-center items-center'>
                <AiFillGithub size="24px" />
              </a>}

            {project.preview &&
              <a onClick={stopEvent} href={project.preview} target="_blank"
                className='hover:bg-green-400 duration-300 w-10 h-10 bg-white 
            rounded-full dark-text flex justify-center items-center'>
                <AiFillEye size="24px" />
              </a>}
          </div>

          <div> {/***** description *****/}

            <h4 className="inline-block font-bold text-2xl postCardTitle hover-line">
              {project.title}
            </h4>
            <div>
              {project.tags.map((tag) =>
                <span key={tag.id} className="px-2 mx-1 py-1 bg-gray-500 uppercase text-sm rounded-sm inline-block my-1">
                  <span>{tag.tag}</span>
                </span>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}