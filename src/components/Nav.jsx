import React from 'react'
import Logo from "../Assets/logo.png"
// import {FaBars, FaTimes} from "react-icons/fa"

function Nav() {
  return (
    <div className="fixed w-full h-[150px] flex justify-between bg-[#FDE74C]">
      <div>
        <img src={Logo} alt="Logo image" style={{width: "160px"}} />
      </div>
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        {/*social icons*/}
      </div>

    </div>
  )
}

export default Nav