import React from 'react'
import logo from "../assets/footerlogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';



const Navbar = () => {
  const toggleNavbar = () =>{
    if(document.getElementById('mbl-menu').classList.contains('hidden')){
      document.getElementById('mbl-menu').classList.remove('hidden')
    }else{
      document.getElementById('mbl-menu').classList.add('hidden')
    }
  }

  return (
    <div className='bg-[#03302D] h-[9vh] md:h-[12vh] sticky top-0'>

      <div className="navbar flex w-[90vw] md:w-[85vw] h-[9vh] md:h-[12vh] mx-auto items-center justify-between">

        <div className="logo cursor-pointer">
          <img src={logo} alt="" />
        </div>
        <ul className="menu md:flex hidden text-white space-x-6 text-lg cursor-pointer">
          <Link to="/">Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/crime-report'>Crime Reports</Link>
          <Link to='/crime-response'>Crime Response's</Link>
          <Link to='/contact'>Contact Us</Link>
        </ul>

        <div className="btns hidden md:block">
          <Link to='/sign-in' className='text-white font-semibold mx-4 text-lg'>Login</Link>
          <Link to='/sign-up' className='text-white font-semibold text-lg px-4 py-1 rounded-lg bg-[#309689]'>Register</Link>
        </div>

        <div onClick={toggleNavbar} className="burger">
          <RxHamburgerMenu className='text-white text-2xl block md:hidden'/>
        </div>

      </div>

      <div id='mbl-menu' className="mbl-menu md:hidden  bg-[#03302D] text-white h-[33vh]">

        <ul className='space-y-4 mx-6 text-xl'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/crime-report'>Crime Reports</Link></li>
          <li><Link to='/crime-response'>Crime Response's</Link></li>
          <li><Link to='/contact'>Contact Us</Link> </li>
        </ul>

        <div className="btns mx-6 my-4">
          <Link to='/sign-in' className='text-white font-semibold text-lg mr-2'>Login</Link>
          <Link to='/sign-up' className='text-white font-semibold text-lg px-4 py-1 rounded-lg bg-[#309689]'>Register</Link>
        </div>

      </div>

    </div>
  )
}

export default Navbar
