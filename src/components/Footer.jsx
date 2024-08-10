import React from 'react'
import logo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <div className='bg-[#000000] text-white  md:h-[60vh]'>

      <div className="footer w-[92vw] mx-auto md:h-[60vh] flex flex-col justify-between">

        <div className="flex items-center md:h-[50vh]">
          <div class="grid cols-1 md:grid-cols-4 gap-4 ">
          <div className=''>
              <img src={logo} alt="" />
            <p className='text-left font-light my-5'>Our Crime Monitoring Portal provides real-time crime data and empowers citizens to report incidents. Together, we enhance public safety and foster community collaboration.</p>
          </div>
          <div>
            <h1 className='font-semibold text-xl'>Pages</h1>
            <ul className='text-lg font-light my-2 space-y-1'>
              <li>Home</li>
              <li>About Us</li>
              <li>Crime Reports</li>
              <li>Crime Responses </li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1 className='font-semibold text-xl'>Crime Categories</h1>
            <ul className='text-lg font-light my-2 space-y-1'>
              <li>Murder</li>
              <li>Target Killing</li>
              <li>Bomb Blast</li>
              <li>High Way & Bank Robbery</li>
              <li>Snatching </li>
              <li>Gang Rape</li>
            </ul>
          </div>
          <div>
            <h1 className='font-semibold text-xl'>Newsletter</h1>
            <p className='text-lg font-light my-1'>Get Updates Of Latest Crimes</p>
            <input type="text" className='text-gray-500 mt-4 rounded-lg px-3 py-1 text-lg border border-gray-300 outline-none bg-[#000000]' placeholder='Email'/>
            <div>
              <button className='bg-[#309689] mt-4 px-12 py-1 font-semibold rounded-lg text-xl'>Subscribe now</button>
            </div>
          </div>
          </div>
        </div>

        <div className="bottom flex md:flex-row flex-col items-center justify-center md:justify-between h-[10vh]">
          <div className="btm-left">
              <p className='font-light text-lg'> © Copyright Crime Portal  2024. </p>
          </div>
          <div className="right flex gap-6">
            <a className='font-light text-lg underline cursor-pointer'>Privicy Policy</a>
            <a className='font-light text-lg underline cursor-pointer'>Terms & Conditions</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
