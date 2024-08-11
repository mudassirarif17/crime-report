import React from 'react'
import logo from "../assets/footerlogo.png";
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {
  const toggleNavbar = () =>{
    if(document.getElementById('mbl-menu').classList.contains('hidden')){
      document.getElementById('mbl-menu').classList.remove('hidden')
    }else{
      document.getElementById('mbl-menu').classList.add('hidden')
    }
  }

  return (
    <div className='bg-[#03302D] h-[9vh] md:h-[12vh]'>

      <div className="navbar flex w-[90vw] md:w-[85vw] h-[9vh] md:h-[12vh] mx-auto items-center justify-between">

        <div className="logo cursor-pointer">
          <img src={logo} alt="" />
        </div>
        <ul className="menu md:flex hidden text-white space-x-6 text-lg cursor-pointer">
          <li>Home</li>
          <li>About Us</li>
          <li>Crime Reports</li>
          <li>Crime Response's</li>
          <li>Contact Us</li>
        </ul>

        <div className="btns hidden md:block">
          <button className='text-white font-semibold mx-4 text-lg'>Login</button>
          <button className='text-white font-semibold text-lg px-4 py-1 rounded-lg bg-[#309689]'>Register</button>
        </div>

        <div onClick={toggleNavbar} className="burger">
          <RxHamburgerMenu className='text-white text-2xl block md:hidden'/>
        </div>

      </div>

      <div id='mbl-menu' className="mbl-menu md:hidden bg-[#03302D] text-white h-[33vh]">

        <ul className='space-y-4 mx-6 text-xl'>
          <li>Home</li>
          <li>About Us</li>
          <li>Crime Reports</li>
          <li>Crime Response's</li>
          <li>Contact Us</li> 
        </ul>

        <div className="btns mx-6 my-4">
          <button className='text-white font-semibold text-lg mr-2'>Login</button>
          <button className='text-white font-semibold text-lg px-4 py-1 rounded-lg bg-[#309689]'>Register</button>
        </div>

      </div>

    </div>
  )
}

export default Navbar
