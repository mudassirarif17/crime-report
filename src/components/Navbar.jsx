import React , {useContext, useEffect} from 'react'
import logo from "../assets/footerlogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import myContext from '../context/data/myContext';





const Navbar = () => {
  const context = useContext(myContext);
  const {user , setUser , userData} = context;

  const path = "/src/images/";


  const navigate = useNavigate();

  const logout = () =>{
    localStorage.removeItem('token');
    navigate("/");
  }

  useEffect(()=>{
      userData();
  } , [])


  const toggleNavbar = () =>{
    if(document.getElementById('mbl-menu').classList.contains('hidden')){
      document.getElementById('mbl-menu').classList.remove('hidden')
    }else{
      document.getElementById('mbl-menu').classList.add('hidden')
    }
  }

  console.log("my user ", user)
  return (
    <div className='bg-[#03302D] h-[9vh] md:h-[12vh] sticky top-0'>

      <div className="navbar flex w-[90vw] md:w-[85vw] h-[9vh] md:h-[12vh] mx-auto items-center justify-between">

        <div className="logo cursor-pointer">
          <img src={logo} alt="" />
        </div>
        <ul className="menu md:flex hidden text-white space-x-6 text-lg cursor-pointer">
          <Link to="/">Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/crime-report'>Crime Response's</Link>
          <Link to='/crime-response'>Crime Reports</Link>
          <Link to='/contact'>Contact Us</Link>
        </ul>

        <div className="btns hidden md:block">
          {localStorage.getItem("token") ? 
          <div className='flex items-center'>
          <div>
            {/* <img className='w-[50px] h-[50px] rounded-full mb-6' src={path+user.image} alt="some error"/> */}
            <h1 className='text-white'>{user?.name}</h1>
            </div>
          <button onClick={logout} className='text-white font-semibold text-lg px-4 py-1 rounded-lg bg-[#309689]'>Logout</button>
          </div>
          : <>
            <Link to='/sign-in' className='text-white font-semibold mx-4 text-lg'>Login</Link>
            <Link to='/sign-up' className='text-white font-semibold text-lg px-4 py-1 rounded-lg bg-[#309689]'>Register</Link>
          </>
          }
          
        </div>

        <div onClick={toggleNavbar} className="burger">
          <RxHamburgerMenu className='text-white text-2xl block md:hidden'/>
        </div>

      </div>

      <div id='mbl-menu' className="mbl-menu md:hidden  bg-[#03302D] text-white py-2">

        <ul className='space-y-4 mx-6 text-xl'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/crime-report'>Crime Response's</Link></li>
          <li><Link to='/crime-response'>Crime Reports</Link></li>
          <li><Link to='/contact'>Contact Us</Link> </li>
        </ul>

        <div className="btns mx-6 my-4">
          {
            localStorage.getItem("token") ? 
              <button onClick={logout} className='text-white font-semibold text-lg px-4 py-1 rounded-lg bg-[#309689]'>Logout</button>
            : <>
              <Link to='/sign-in' className='text-white font-semibold text-lg mr-2'>Login</Link>
              <Link to='/sign-up' className='text-white font-semibold text-lg px-4 py-1 rounded-lg bg-[#309689]'>Register</Link>
            </>
          }
          
        </div>

      </div>

    </div>
  )
}

export default Navbar
