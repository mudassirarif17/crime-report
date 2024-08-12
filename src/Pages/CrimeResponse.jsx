import React from 'react'
import Layout from "../Pages/Layout";
import location from "../assets/location.png";

const CrimeResponse = () => {
    return (
        <Layout>
            <div className="crime-response">
                <div className="hero bg-[#03302D] h-[35vh] text-white flex justify-center items-center">
                    <h1 className="text-5xl font-semibold">Crime Responses</h1>
                </div>

                <div className="crime-response-top w-[90vw] mx-auto my-10 ">

                    <div className="crime-response-left w-[65%]">

                    </div>

                    <div className="crime-response-right bg-[#EBF5F4] w-[30%] rounded-lg px-4 py-6">

                        <div className="top w-[33%] flex items-center justify-between">
                            <div className="top-left">
                                <img className='h-[30px]' src={ location } alt="" />
                            </div>
                            <div className="top-right">
                                <p className='font-bold text-lg'>Location</p>
                                <p className='font-light text-md'>Karachi </p>
                            </div>
                        </div>
                        <div className="btm my-4 border border-gray-400 rounded-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14478.083075774095!2d67.01071539344888!3d24.88021219331455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f045d8bd163%3A0xffa3065ebd3f4dc3!2sKarachi%20Zoo%20Museum!5e0!3m2!1sen!2s!4v1723364064138!5m2!1sen!2s"
                                    style={ { border: 0, width: "100%", height: "250px" } }
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Maps"
                                ></iframe>
                            </div>
                    </div>

                </div>


            </div>
        </Layout>
    )
}

export default CrimeResponse
