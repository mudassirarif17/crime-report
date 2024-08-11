import React from 'react'
import Layout from "../Pages/Layout";
import clock from "../assets/clock.png"
import mapPin from "../assets/map-pin.png";
import mail from "../assets/mail.png";
import call from "../assets/call.png";


const About = () => {
  return (
    <Layout>

      <div className="contact">

        <div className="hero bg-[#03302D] h-[35vh] text-white flex justify-center items-center">
            <h1 className='text-5xl font-semibold'>Contact Us</h1>
        </div>

        <div className="contact-details-top w-[85vw] mx-auto flex md:flex-row flex-col my-8">

          <div className="conatct-details-left md:w-[55%] w-[100%] my-auto">

            <div className="desc">
              <h1 className='text-3xl md:text-5xl font-bold'>Connect with Us </h1>
              <h1 className='font-bold text-lg md:text-2xl'>Stay Informed, Stay Safe</h1>
              <p className='font-light'>For immediate assistance or to report a crime, please use our online portal.</p>
            </div>

            <div className="details">

                <div className="details-top md:w-[78%] my-10 flex justify-between">

                  <div className="details-top-left space-y-3">
                    <img src={call} alt="" />
                    <p className='font-bold text-xl md:text-2xl'>Call for inquiry</p>
                    <p className='font-semibold'>+92 ----------</p>
                  </div>

                  <div className="details-top-right space-y-3">
                  <img src={mail} alt="" />
                    <p className='font-bold text-xl md:text-2xl'>Send us email</p>
                    <p className='font-semibold'>crimeportal.com</p>
                  </div>
                </div>

                <div className="details-bottom w-[83%] md:w-[70%] my-10 flex justify-between">
                <div className="details-btm-left space-y-3">
                    <img src={clock} alt="" />
                    <p className='font-bold text-xl md:text-2xl'>Service</p>
                    <p className='font-semibold'>24/7</p>
                  </div>

                  <div className="details-btm-right space-y-3">
                  <img src={mapPin} alt="" />
                    <p className='font-bold text-xl md:text-2xl'>Location</p>
                    <p className='font-semibold'>Karachi</p>
                  </div>
                </div>
              </div>

          </div>


          <div className="conatct-details-right md:w-[45%] w-[100%] bg-[#EBF5F4] rounded-xl py-10">

            <div className="top mb-5">
              <h1 className='text-center text-2xl font-bold'>Contact Info</h1>
            </div>

            <div className="mid">
              <div className="inputs">

                <div className="grid grid-cols-2">

                  <div className='flex flex-col w-[85%] mx-auto my-3'>
                    <label className='mb-2 font-semibold' htmlFor="">First Name</label>
                    <input className='px-4 py-1 rounded-lg outline-none' type="text" placeholder='Your name'/>
                  </div>

                  <div className='flex flex-col w-[88%] my-3'>
                    <label className='mb-2 font-semibold' htmlFor="">Last Name</label>
                    <input className='px-4 py-1 rounded-lg outline-none' type="text" placeholder='Your last name'/>
                  </div>

                </div>

                <div className='flex flex-col w-[92%] mx-auto my-3'>
                  <label className='mb-2 font-semibold' htmlFor="">Email Address</label>
                  <input className='px-4 py-1 rounded-lg outline-none' type="text" placeholder='Your E-mail address'/>
                </div>

                <div className='flex flex-col w-[92%] mx-auto my-3'>
                  <label className='mb-2 font-semibold' htmlFor="">Email Address</label>
                  <input className='px-4 py-1 rounded-lg outline-none' type="text" placeholder='Your E-mail address'/>
                </div>

                <div className='flex flex-col w-[92%] mx-auto my-3'>
                  <label className='mb-2 font-semibold' htmlFor="">Message</label>
                  <textarea rows={5} className='px-4 py-1 rounded-lg outline-none' type="text" placeholder='Your message...'/>
                </div>

                <div className='flex flex-col w-[46%] mx-6 my-5'>
                  <button className='bg-[#309689] text-white py-1 font-medium rounded-lg'>Send Message</button>
                </div>

              </div>
            </div>

            <div className="bottom"></div>

          </div>


        </div>


      </div>
    </Layout>
  )
}

export default About
