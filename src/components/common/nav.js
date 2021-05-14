import { useState } from "react";
import { Link } from "react-router-dom";

import { BiMenu } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <nav className={showNav ? "h-full md:h-20 dark-bg w-full fixed z-50 " : "h-16 sm:h-20 dark-bg w-full fixed z-50 "} 
      onClick={() => {if (showNav) {setShowNav(!showNav)}}}
    >
      <div className="container">
        <div className={showNav ? 
          "h-full pb-8 md:pb-0 flex flex-col md:flex-row items-center justify-between md:h-20" : 
          "h-16 sm:h-20 flex flex-col md:flex-row items-center justify-between md:h-20"}
        > {/* main nav flex item */}

          <div className={showNav ?
            "h-16 sm:h-20 mb-12 md:mb-0 w-full flex items-center justify-between" :
            "h-16 sm:h-20 w-full flex items-center justify-between"}
          > {/* logo and ~icon */}
            <Link to='/'>
              <p className="text-white text-center font-bold text-xl hover-line">Logo</p>
            </Link>
            <div className="block md:hidden text-white cursor-pointer" 
              onClick={() => {setShowNav(!showNav)}}
            >
              {!showNav ? <BiMenu size='40px' /> : <IoMdClose size='40px' />}
            </div>
          </div> {/* logo and ~icon */}

          <div className={!showNav ? "hidden md:block" : "block"}> {/* menu items */}
            <ul className="flex flex-col md:flex-row text-white text-center font-semibold tex-base md:text-lg">
              <li className="my-2 md:ml-12">
                <Link to="/" className="hover-line">Home</Link>
              </li>
              <li className="my-2 md:ml-12">
                <Link className='hover-line' to='/blogs'>Blogs</Link>
              </li>
              <li className="my-2 md:ml-12">
                <Link className='hover-line' to='/projects'>Projects</Link>
              </li>
              <li className="my-2 md:ml-12">
                <Link className='hover-line' to='/contact'>Contact</Link>
              </li>
              <li className="my-2 md:ml-12">
                <Link className='hover-line' to='/about'>About</Link>
              </li>
            </ul>
          </div> {/* menu items */}

        </div> {/* main nav flex item */}
      </div>
    </nav>
  );
}

export default Navbar;