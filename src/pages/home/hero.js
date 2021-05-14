import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ButtonP from '../../components/common/buttonP'
import ButtonS from '../../components/common/buttonS'
import ButtonHome from '../../components/common/buttonHome'

import { GiTeacher } from 'react-icons/gi'
import { BsCodeSlash } from 'react-icons/bs'
import { RiPenNibFill } from 'react-icons/ri'
import { IoSchool } from 'react-icons/io5'
import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'


const Hero = () => {

  const [data, setData] = useState(tempData)

  useEffect(() => {setData(tempData)}, [tempData])
    
  return (
    <section id="#hero">
      <div className="h-auto dark-bg w-full"> {/* ----------full hero---------- */}

          {/* ----------black part---------- */}
          <div className="h-auto sm:h-4/6 mb-40 flex 
          justify-center pt-20"> 
            <div className="container">

              <div data-aos="fade-up" className="text-white text-center 
              items-center py-0 sm:py-10">
                <div> {/* ----------Text---------- */}
                  <h4 className="text-base sm:text-lg md:text-xl">
                    Hi amigos, I am 
                  </h4>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold my-4">
                    Mohaiminul Islam
                  </h1>
                </div> 

                <div className="mt-6 sm:mt-8 mb-0 lg:mb-8 xl:mb-0"> {/* ----------button---------- */}
                  <Link to='/blogs'><ButtonHome>Blogs</ButtonHome></Link>
                  <span className="w-4 sm:w-8 inline-block"></span>
                  <Link to='/projects'><ButtonHome>Projects</ButtonHome></Link>
                </div>
              </div>

            </div>
          </div> {/* ----------black part ends---------- */}

          <div className="radius-top bg-white h-auto sm:h-2/6"> {/* ----------white part---------- */}
            <div className="transform -translate-y-28 container">
              <div className=""> {/* ----------card---------- */}
                <div className="block xl:hidden"> {/*three card */}
                  <ThreeSlider data={data} />
                </div>
                <div className="hidden xl:flex flex-row justify-center"> {/* large: four card */}
                  {data.map((d, index) => 
                    <div className="mx-4">
                      <Card key={index} data={data} active={index} indicator={false} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div> {/* ----------white part end---------- */}

      </div> {/* ----------full hero end---------- */}
  </section>);
}


function Indicator({ data, active, moveTo, toRight, toLeft }) {
  return (
    <>
      <div className="cursor-pointer transform hover:-translate-x-1 duration-300">
        <BsArrowLeftShort size="24px" 
          onClick={toLeft}
        />
      </div>

        {data.map((d, index) => {
          return (
            <div key={index}>
              <div 
                className={`cursor-pointer w-${active===index ? 2 : 1} h-${active===index ? 2 : 1} rounded-full bg-gray-200 self-center mx-1 duration-300 linear`}
                onClick={() => moveTo(index)}></div>
            </div>
          )
        })}

      <div className="cursor-pointer transform hover:translate-x-1 duration-300">
        <BsArrowRightShort size="24px" 
          onClick={toRight}
        />
      </div>
    </>
  )
}

function ThreeSlider({ data }) {
  const [active, setActive] = useState(0)
  const [left, setLeft] = useState(data.length-1)
  const [right, setRight] = useState(1) 

  function moveTo(index) {setActive(index)}
  function toRight() {setActive(active===data.length-1?0:active+1)}
  function toLeft() {setActive(active===0?data.length-1:active-1)}

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setActive((prev) => prev===data.length-1 ? 0 : prev+1)
    }, 5000)
    return () => clearInterval(autoSlide)
  }, [data.length]);

  useEffect(() => {
    setLeft(active===0 ? data.length-1 : active-1)
    setRight(active===data.length-1 ? 0 : active+1)
  }, [active, data.length]);

  return (
    <>
      <div className="flex justify-center mx-auto">
        <div className="mx-1 transform scale-75 hidden md:block lg:scale-100">
          <Card 
            data = {data}
            active = {left}
            setActive = {setLeft}
            moveTo={moveTo}
            toRight={toRight}
            toLeft={toLeft}
            indicator={false} 
          />
        </div>
        <div className="mx-1 transform scale-100 lg:scale-125 lg:mx-12">
          <Card 
            data = {data}
            active = {active}
            setActive = {setActive}
            moveTo={moveTo}
            toRight={toRight}
            toLeft={toLeft}
            indicator={true}   
          />
        </div>
        <div className="mx-1 transform scale-75 hidden md:block lg:scale-100">
          <Card data = {data}
            active = {right}
            setActive = {setRight}
            moveTo={moveTo}
            toRight={toRight}
            toLeft={toLeft}
            indicator={false} 
          />
        </div>
      </div>
    </>
  )
}

function Card({ data, active, moveTo, toRight, toLeft, indicator=true }) {
  return (
    <div className="w-64 h-80 light-bg rounded-3xl mx-auto relative shadow-xl">
      {/* ----------icon---------- */}
      <div className={`absolute bg-${data[active].color}-400 -top-6 left-16 
      w-16 h-16 rounded-2xl flex justify-center items-center duration-100`}> 
        <div className={`text-${data[active].color}-900`}>
          {data[active].icon==='BsCodeSlash' && <BsCodeSlash size="40px" />}
          {data[active].icon==='RiPenNibFill' && <RiPenNibFill size="40px" />}
          {data[active].icon==='IoSchool' && <IoSchool size="40px" />}
          {data[active].icon==='GiTeacher' && <GiTeacher size="40px" />}
        </div>
      </div>

      {/* ----------text---------- */}
      <div className="h-full px-10 py-16 text-white flex flex-col justify-between"> 
        <div>
          <h4 className="mb-4 font-bold text-lg">{data[active].title}</h4>
          <p className="text-sm">{data[active].description}</p>
        </div>
        <Link to={`${data[active].link}`} className={`bg-${data[active].color}-400 dark-text font-semibold mt-8 px-1 py-1.5 rounded-full duration-100 text-center`}>{data[active].buttonText}</Link>
      </div>

      {indicator && /* ----------indicator---------- */
        <div className="-mt-10 text-white flex items-center justify-center">
          <Indicator 
            data = {data}
            active = {active}
            moveTo={moveTo}
            toRight={toRight}
            toLeft={toLeft}
          />
        </div>
      }
    </div>
  )
}

const tempData = [
  {
    color: 'green',
    icon: 'BsCodeSlash',
    title: 'React Developer',
    description: 'I develop web and mobile apps with react. I also have experience in MERN stack.',
    buttonText: 'View Projects',
    link: "/projects",
  },
  {
    color: 'red',
    icon: 'RiPenNibFill',
    title: 'Writer',
    description: 'I write about my life at cadet college and BUET weekly. I also write about science and math.',
    buttonText: 'Browse Stories',
    link: "/blogs",
  },
  {
    color: 'purple',
    icon: 'IoSchool',
    title: 'Student',
    description: 'I am a 1st year computer science student. I am currently studying at BUET.',
    buttonText: 'About Me',
    link: "/about",
  },
  {
    color: 'blue',
    icon: 'GiTeacher',
    title: 'Tutor',
    description: 'I help the HSC students in math. I made some courses and practice problems for free.',
    buttonText: 'View Courses',
    link: "/courses"
  },
]
 
export default Hero;