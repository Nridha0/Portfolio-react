import React, { useState }from 'react'
import Logo from "../Assets/logo.png"
import { Link } from 'react-scroll';
import {FaBars, FaTimes} from "react-icons/fa"




function Nav() {
  const [nav, setNav] = useState(false);
  // const handleClick = () => setNav(!nav);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "resume",
    },
    {
      id: 4,
      link: "contact",
    },
  ];


  return (
    <div className="flex justify-between items-center w-full h-20 bg-yellow-400  fixed">
    <div>
    <img src={Logo} alt='Logo Image' style={{ width: '100px' }} />
    </div>

    <ul className="hidden md:flex">
      {links.map(({ id, link }) => (
        <li
          key={id}
          className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
        >
          <Link to={link} smooth duration={500}>
            {link}
          </Link>
        </li>
      ))}
    </ul>

    <div
      onClick={() => setNav(!nav)}
      className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
    >
      {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
    </div>

    {nav && (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
          >
            <Link
              onClick={() => setNav(!nav)}
              to={link}
              smooth
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);
};
    // <div className="fixed w-full h-[150px] flex justify-between bg-[#FDE74C]">
    //   <div>
    //     <img src={Logo} alt="Logo image" style={{width: "160px"}} />
    //   </div>
    //   <ul className='hidden md:flex'>
    //     <li>
    //       <Link to='Home' smooth={true} duration={500}>
    //         Home
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to='About' smooth={true} duration={500}>
    //         About
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to='Resume' smooth={true} duration={500}>
    //         Resume
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to='Contact' smooth={true} duration={500}>
    //         Contact
    //       </Link>
    //     </li>
    //   </ul>
    //   <ul
    //   className={
    //       !nav
    //         ? 'hidden'
    //         : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
    //     }
    //   >
    //     <li className='py-6 text-4xl'>
    //       <Link onClick={handleClick} to='Home' smooth={true} duration={500}>
    //         Home
    //       </Link>
    //     </li>
    //     <li className='py-6 text-4xl'>
    //       {' '}
    //       <Link onClick={handleClick} to='About' smooth={true} duration={500}>
    //         About
    //       </Link>
    //     </li>
    //     <li className='py-6 text-4xl'>
    //       {' '}
    //       <Link onClick={handleClick} to='Resume' smooth={true} duration={500}>
    //         Resume
    //       </Link>
    //     </li>
     
    //     <li className='py-6 text-4xl'>
    //       {' '}
    //       <Link onClick={handleClick} to='Contact' smooth={true} duration={500}>
    //         Contact
    //       </Link>
    //     </li>
    //   </ul>
    //   </div>



export default Nav