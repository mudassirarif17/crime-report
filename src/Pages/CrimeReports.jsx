import React from 'react';
import Layout from "../Pages/Layout";
import bookmark from "../assets/bookmark.png"
import cardLogo from "../assets/crime-card-icon.png";

const CrimeReports = () => {
  return (
    <Layout>

      <div className="crime-reports">

        <div className="hero bg-[#03302D] h-[35vh] text-white flex justify-center items-center">
            <h1 className='text-5xl font-semibold'>Crime Reports</h1>
        </div>

        <div className="crime-cards w-[90vw] mx-auto my-5">

          <div className="card w-[85vw] mx-auto bg-white shadow-xl rounded-2xl py-4 mb-10">

              <div className="card-top w-[96%] mx-auto flex justify-between items-center">
                <button className='bg-[#d6f5f1] font-light rounded-lg text-[#309689] px-2 py-1'>Updated</button>
                <img src={bookmark} alt="" />
              </div>

              <div className="card-mid w-[96%] my-5 mx-auto flex items-center space-x-4">
                <div className="logo">
                  <img src={cardLogo} alt="cardlogo" />
                </div>
                <div className="desc">
                  <h1 className='font-semibold text-2xl'>Crime Reports Of 2023</h1>
                  <p className='font-light text-md'>Karachi East, West, South, North</p>
                </div>
              </div>

              <div className="card-bottom w-[96%] flex justify-end my-5 mx-auto">
                <button className='bg-[#309689] text-white px-3 py-1 font-semibold rounded-lg'>See More</button>
              </div>
          </div>

          <div className="card w-[85vw] mx-auto shadow-xl rounded-2xl py-4 mb-10">

              <div className="card-top w-[96%] mx-auto flex justify-between items-center">
                <button className='bg-[#d6f5f1] font-light rounded-lg text-[#309689] px-2 py-1'>Updated</button>
                <img src={bookmark} alt="" />
              </div>

              <div className="card-mid w-[96%] my-5 mx-auto flex items-center space-x-4">
                <div className="logo">
                  <img src={cardLogo} alt="cardlogo" />
                </div>
                <div className="desc">
                  <h1 className='font-semibold text-2xl'>Crime Reports Of 2023</h1>
                  <p className='font-light text-md'>Karachi East, West, South, North</p>
                </div>
              </div>

              <div className="card-bottom w-[96%] flex justify-end my-5 mx-auto">
                <button className='bg-[#309689] text-white px-3 py-1 font-semibold rounded-lg'>See More</button>
              </div>
          </div>

        </div>

        <div className="crime-stats bg-[#EBF5F4] py-10">

          <div className="stats-top">
            <h1 className='text-center text-5xl font-bold mb-8'>Crime Statistics</h1>
            <p className='text-center text-md font-light'>Our portal delivers dynamic crime statistics, offering insights into registered complaints <br /> such as robberies, snatchings, bomb blasts, gang rapes, and more.</p>
          </div>

          <div className="stats-mid"></div>
          <div className="stats-bottom"></div>

        </div>

      </div>
    </Layout>
  )
}

export default CrimeReports
