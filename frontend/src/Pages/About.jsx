import React from 'react'
import Layout from "../Pages/Layout";
import firstBg from "../assets/firstBg.png";
import secondBg from "../assets/secondBg.png";
import file from "../assets/file.png";
import bcase from "../assets/bcase (2).png";
import tick from "../assets/tick.png";
import user from "../assets/user.png";
import ufile from "../assets/ufile.png";
import crown from "../assets/crown.png";
import badge from "../assets/badge.png";
import badgeu from "../assets/badgeu.png";
import laptop from "../assets/laptop.png";
import manLaptop from "../assets/man-laptop.png";
import community from "../assets/community.png";


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
              <p className='text-center font-light text-sm'>Discover how to effectively use our portal to report crimes, respond to incidents, and access valuable crime statistics in Karachi.</p>
            </div>
            <div className="bg-between-btm my-5">
              <div className='grid cols-1 md:grid-cols-4 gap-4'>

                <div className="card cursor-pointer my-4 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <img className='my-3' src={user} alt="user" />
                  <h1 className='text-xl font-bold text-center'>Register or Login</h1>
                  <p className='text-center font-light text-sm px-4'>Create an account or log in to access our features.</p>
                </div>

                <div className="card cursor-pointer my-4 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <img className='my-3' src={file} alt="user" />
                  <h1 className='text-xl font-bold text-center'>Report Crime</h1>
                  <p className='text-center font-light text-sm px-4'>Easily register your complaint and report crimes through our intuitive interface.</p>
                </div>

                <div className="card cursor-pointer my-4 h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center">
                  <img className='my-3' src={bcase} alt="user" />
                  <h1 className='text-xl font-bold text-center'>Response to Crimes</h1>
                  <p className='text-center font-light text-sm px-4'>Engage with the community by responding to crime reports and sharing information.</p>
                </div>

                <div className="card cursor-pointer my-4 h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center">
                  <img className='my-3' src={tick} alt="user" />
                  <h1 className='text-xl font-bold text-center'>View Crime Statistics</h1>
                  <p className='text-center font-light text-sm px-4'>Access detailed crime statistics and insights specific to Karachi.</p>
                </div>

              </div>
            </div>
          </div>

          <div className="second-bg my-8">
            <img src={secondBg} alt="" />
          </div>

          <div className="community flex flex-col md:flex-row justify-between items-center">
            <div className="comm-left flex  justify-between gap-2 w-[100%] md:w-[45%] h-[50vh]">
              <div className="comm-left-l">
                <img className='h-[50vh] w-[32vh] md:w-[37vh]' src={laptop} alt="" />
              </div>
              <div className="comm-left-r flex flex-col justify-between">
                <img className='h-[28vh] w-[33vh] md:w-[38vh]' src={manLaptop} alt="" />
                <img className='h-[20vh] w-[33vh] md:w-[38vh]' src={community} alt="" />
              </div>
            </div>

            <div className="comm-right md:w-[50%] ">
              <div className="top px-4">
                <h1 className='font-bold text-lg md:text-4xl my-2'>Enhancing Community</h1>
                <h1 className='font-bold text-lg md:text-4xl text-[#309689] my-2'>Safety Together</h1>
                <p className='font-light text-sm'>In our shared mission to enhance community safety, collaboration is key. By working together, residents, law enforcement, and local organizations can create a proactive approach to crime prevention. </p>
              </div>

              <div className="btm px-4 my-4">
                <div className="btm-top flex flex-col md:flex-row">
                  <div className="card-1 items-center flex">
                    <img className='w-[50px]' src={crown} alt="" />
                    <p className='text-sm font-bold'>Safe & Secure Community</p>
                  </div>
                  <div className="card-2 flex items-center md:ml-5">
                    <img className='w-[50px]' src={ufile} alt="" />
                    <p className='text-sm font-bold'>Registering Complaints</p>
                  </div>
                </div>
                <div className="btm-btm my-2  flex flex-col md:flex-row">
                  <div className="card-1 flex items-center">
                    <img className='w-[50px]' src={badge} alt="" />
                    <p className='text-sm font-bold'>Response Optimization</p>
                  </div>
                  <div className="card-2 flex items-center md:ml-10">
                    <img className='w-[50px]' src={badgeu} alt="" />
                    <p className='text-sm font-bold'>Predictive Policing Solutions</p>
                  </div>
                </div>
              </div>

            </div>

          </div>


        </div>


      </div>
    </Layout>
  )
}

export default About
