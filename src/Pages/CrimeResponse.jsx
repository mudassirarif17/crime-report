import React from 'react'
import Layout from "../Pages/Layout";
import location from "../assets/location.png";

const CrimeResponse = () => {
    return (
        <Layout>
            <div className="crime-response">
                <div className="hero bg-[#03302D] h-[30vh] text-white flex justify-center items-center">
                    <h1 className="text-3xl md:text-5xl font-semibold">Crime Responses</h1>
                </div>

                <div className="crime-response-top flex flex-col-reverse md:flex-row w-[90vw] mx-auto my-10 ">

                    <div className="crime-response-left w-[100%] md:w-[65%]">

                        <div className="top w-[100%] md:w-[95%] px-4 my-16">
                            <div class="grid cols-1 md:grid-cols-3 gap-4 ">
                                <div className="card cursor-pointer bg-[#077265] h-[25vh] md:h-[32vh] rounded-lg">
                                    <p className='font-semibold text-xl text-center my-4'>Complaint Box</p>
                                    <p className='text-center text-3xl font-semibold my-5'>3</p>
                                </div>
                                <div className="card cursor-pointer bg-[#077265] h-[25vh] md:h-[32vh] rounded-lg">
                                    <p className='font-semibold text-xl text-center my-4'>Compliants</p>
                                    <p className='text-center text-3xl font-semibold my-5'>99</p>
                                </div>
                                <div className="card cursor-pointer bg-[#077265] h-[25vh] md:h-[32vh] rounded-lg">
                                    <p className='font-semibold text-xl text-center my-4'>Resolved Complaints</p>
                                    <p className='text-center text-3xl font-semibold my-5'>56</p>
                                </div>
                            </div>
                        </div>

                        <div className="btm bg-[#309689] w-[100%] md:w-[96%] h-[6vh] md:h-[9vh] rounded-xl flex items-center">

                            <div className="left flex justify-center w-[90%]">
                                <button className='text-white bg-[#206e64] py-1 rounded-lg w-[90%] font-bold text-lg'>Complaints</button>
                            </div>
                            <div className="right flex justify-center w-[90%]">
                                <button className='text-white font-bold text-lg'>People Responses</button>
                            </div>

                        </div>

                    </div>

                    <div className="crime-response-right bg-[#EBF5F4] w-[100%] md:w-[30%] rounded-lg px-4 py-6">

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

                <div className="crime-response-btm flex flex-col md:flex-row w-[90vw] mx-auto my-10 ">

                    <div className="crime-response-left w-[100%] md:w-[65%] mb-10">

                        <tr className="btm mb-3 bg-[#309689] w-[100%] md:w-[96%] h-[6vh] md:h-[9vh] rounded-xl flex items-center cursor-pointer">
                            <td className='w-[10%] text-center text-lg'>1</td>
                            <td className='w-[50%] text-lg'>Complaint</td>
                            <td className='w-[40%] text-lg'>View</td>
                        </tr>

                        <tr className="btm mb-3 bg-[#309689] w-[100%] md:w-[96%] h-[6vh] md:h-[9vh] rounded-xl flex items-center cursor-pointer">
                            <td className='w-[10%] text-center text-lg'>1</td>
                            <td className='w-[50%] text-lg'>Complaint</td>
                            <td className='w-[40%] text-lg'>View</td>
                        </tr>

                        <tr className="btm mb-3 bg-[#309689] w-[100%] md:w-[96%] h-[6vh] md:h-[9vh] rounded-xl flex items-center cursor-pointer">
                            <td className='w-[10%] text-center text-lg'>1</td>
                            <td className='w-[50%] text-lg'>Complaint</td>
                            <td className='w-[40%] text-lg'>View</td>
                        </tr>

                    </div>

                    <div className="crime-response-right bg-[#EBF5F4] w-[100%] md:w-[30%] rounded-lg px-4 py-4 ">
                        <h1 className='font-semibold text-3xl my-2'>Send Response</h1>
                        <div className="inputs">

                            <div className="inp my-4">
                                <input className='w-[100%] px-4 py-1 rounded-lg outline-none' type="text" placeholder='Full name'/>
                            </div>

                            <div className="inp my-4">
                                <input className='w-[100%] px-4 py-1 rounded-lg outline-none' type="text" placeholder='Email Address'/>
                            </div>

                            <div className="inp my-4">
                                <input className='w-[100%] px-4 py-1 rounded-lg outline-none' type="text" placeholder='Complaint Title'/>
                            </div>

                            <div className="inp my-4">
                                <textarea rows={8} className='w-[100%] px-4 py-1 rounded-lg outline-none' type="text" placeholder='Your Message'/>
                            </div>

                            <div className="inp my-4">
                                <button className='bg-[#309689] text-white px-6 py-1 rounded-lg font-semibold'>Send Message</button>
                            </div>

                            

                        </div>
                    </div>

                </div>

            </div>
        </Layout>
    )
}

export default CrimeResponse
