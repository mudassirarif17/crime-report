import React from 'react'
import Layout from "../Pages/Layout";
import firstBg from "../assets/firstBg.png";
import secondBg from "../assets/secondBg.png";
import file from "../assets/file.png";
import bcase from "../assets/bcase (2).png";
import tick from "../assets/tick.png";
import user from "../assets/user.png";


const About = () => {
  return (
    <Layout>

      <div className="about">

        <div className="hero bg-[#03302D] h-[35vh] text-white flex justify-center items-center">
            <h1 className='text-5xl font-semibold'>About Us</h1>
        </div>

        <div className="desc w-[80vw] mx-auto my-10">

          <div className="desc-left w-[80vw] flex flex-col md:flex-row">
            <div className='w-[100%] md:w-[30%]'>
              <h1 className='text-4xl font-bold text-center md:text-left'>What <span className='text-[#309689]'> We Do?</span></h1>
            </div>
            <div className='w-[100%] md:w-[70%]'>
              <p className='text-[#309689] text-lg font-semibold text-center md:text-left'>We deliver advanced monitoring solutions for comprehensive crime management. Our platform empowers communities with crime data insights, enabling proactive crime complaints and responses. Stay ahead of threats and protect your community.</p>
            </div>
          </div>

          <div className="first-bg my-8">
            <img src={firstBg} alt="" />
          </div>

          <div className='bg-between'>
            <div className="bg-between-top">
              <h1 className='text-xl font-semibold md:text-5xl md:font-bold text-center'>How it works</h1>
              <div className='bg-[#309689] w-[18vw] h-[3px] mx-auto my-2 md:my-5'></div>
            </div>
            <div className="bg-between-btm"></div>
          </div>

          <div className="first-bg my-8">
            <img src={secondBg} alt="" />
          </div>


        </div>


      </div>
    </Layout>
  )
}

export default About
