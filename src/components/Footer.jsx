import React from 'react'
import logo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <div className='bg-[#000000] text-white h-[60vh]'>

      <div className="footer w-[92vw] mx-auto">
        <div class="grid grid-cols-4 gap-4">
          <div className=''>
              <img src={logo} alt="" />
            <p className='text-left'>Our Crime Monitoring Portal provides real-time crime data and empowers citizens to report incidents. Together, we enhance public safety and foster community collaboration.</p>
          </div>
          <div>
            <h1>Pages</h1>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Crime Reports</li>
              <li>Crime Responses </li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1>Crime Categories</h1>
            <ul>
              <li>Murder</li>
              <li>Target Killing</li>
              <li>Bomb Blast</li>
              <li>High Way & Bank Robbery</li>
              <li>Snatching </li>
              <li>Gang Rape</li>
            </ul>
          </div>
          <div>
            <h1>Newsletter</h1>
            <p>Get Updates Of Latest Crimes</p>
            <input type="text" placeholder='Email'/>
            <div>
              <button className='bg-[#309689]'>Subscribe now</button>
            </div>
          </div>
        </div>

        <div className="bottom flex justify-between">
          <div className="btm-left">
              <p> © Copyright Crime Portal  2024. </p>
          </div>
          <div className="right flex">
            <a>Privicy Policy</a>
            <a>Terms & Conditions</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
