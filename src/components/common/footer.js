import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import { GrGithub, GrFacebookOption } from 'react-icons/gr'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {

  const [categories, setCategories] = useState()

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    let res = await axios.get('https://boiling-island-50404.herokuapp.com/categories')
    let data = res.data;
    setCategories(data)
  }

  return (
    <footer className='mt-24'>
      <div className="dark-bg p-4 sm:p-8">

        <div className="flex flex-col space-y-4 space-x-0 sm:space-y-0 container sm:flex-row justify-between sm:space-x-8 md:space-x-16 lg:space-x-24">

          <div className='text-white flex flex-col imtes-start w-full'>
            <div className='text-xl font-bold'>
              Mohaiminul Islam
            </div>
            <div className="bangla text-sm text-gray-250 mt-2 mb-4">
              আমি শখের লেখক। লিখি আমার গল্প, আমার বন্ধুদের গল্প, আমার চোখে আমাদের গল্প। এরপর একলা রাতে নিজেই সেসব পড়ে স্মৃতিকাতর হই। ভালোই লাগে। রাতের আকাশে নাম-না-জানা তারার দিকে তাকিয়ে কী ভীষণভাবে বেঁচে থাকতে ইচ্ছে করে! আহা জীবন!
            </div>
            <div className='flex space-x-4 text-gray-300'>
              <a href='https://github.com/Mohaimin-1935' target='blank' className="flex justify-center items-center transform hover:text-white hover:-translate-y-1 duration-300 cursor-pointer">
                <GrGithub size='24px' />
              </a>
              <a href='https://www.linkedin.com/in/mohaiminul-islam-682a0a19b/' target='blank' className="flex justify-center items-center transform hover:text-white hover:-translate-y-1 duration-300 cursor-pointer">
                <FaLinkedinIn size='24px' />
              </a>
              <a href='https://www.facebook.com/mohaimin1935' target='blank' className="flex justify-center items-center transform hover:text-white hover:-translate-y-1 duration-300 cursor-pointer">
                <GrFacebookOption size='24px' />
              </a>
              <a href='https://www.instagram.com/mohaimin_35/' target='blank' className="flex justify-center items-center transform hover:text-white hover:-translate-y-1 duration-300 cursor-pointer">
                <FiInstagram size='24px' />
              </a>
            </div>
            <div className='text-xs text-gray-300 my-8'>
            Copyright © 2021 Mohaiminul Islam. All Rights Reserved. 
            </div>
          </div>

          <div className=' w-full'>
            <FooterTitle>Featured Writings</FooterTitle>
            {categories && categories.map((category) => 
              <div className='bangla'>
                <FooterLink link={`/categories/${category.slug}`}>{category.title}</FooterLink>
              </div>
            )}
          </div>

          <div className=' w-full'>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink link={'/categories'}>All Series</FooterLink>
            <FooterLink link={'/blogs'}>All Posts</FooterLink>
            <FooterLink link={'/projects'}>All Projects</FooterLink>
            <FooterLink link={'/about'}>About Me</FooterLink>
            <FooterLink link={'/contact'}>Contact Me</FooterLink>
          </div>

        </div>

      </div>
    </footer>
  );
}


function FooterTitle({children}) { 
  return <>
      <div className="font-semibold text-white mb-2">
        {children}
      </div>
    </>
}

function FooterLink({children, link}) { 
  return <div className="mb-1 text-gray-200 text-sm transform hover:translate-x-1 hover:text-white duration-300">
      <Link to={link}>
        {children}
      </Link>
    </div>
}

export default Footer;