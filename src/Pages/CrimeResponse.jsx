import React, { useEffect, useState , useContext } from 'react';
import Layout from "../Pages/Layout";
import location from "../assets/location.png";
import myContext from '../context/data/myContext';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CrimeResponse = () => {
    const context = useContext(myContext);
    const {title , setTitle , desc , setDesc , image , setImage , allNotes , setAllNotes , searchNotes , setSearchNotes , search , setSearch  , addPostHandle , getAllPosts} = context;

    useEffect(() => {
        getAllPosts();
    }, [searchNotes]);



    return (
        <Layout>
            <ToastContainer />
            <div className="crime-response">
                <div className="hero bg-[#03302D] h-[30vh] text-white flex justify-center items-center">
                    <h1 className="text-3xl md:text-5xl font-semibold">Crime Responses</h1>
                </div>

                <div className="crime-response-top flex flex-col-reverse md:flex-row w-[90vw] mx-auto my-10 ">

                    <div className="crime-response-left w-[100%] md:w-[65%]">

                        <div className="top w-[100%] md:w-[95%] px-4 my-16">
                            <div className="grid cols-1 md:grid-cols-3 gap-4 ">
                                <div className="card cursor-pointer bg-[#077265] h-[25vh] md:h-[32vh] rounded-lg">
                                    <p className='font-semibold text-xl text-center my-4'>Complaint Box</p>
                                    <p className='text-center text-3xl font-semibold my-5'>3</p>
                                </div>
                                <div className="card cursor-pointer bg-[#077265] h-[25vh] md:h-[32vh] rounded-lg">
                                    <p className='font-semibold text-xl text-center my-4'>Complaints</p>
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
                                <img className='h-[30px]' src={ location } alt="location" />
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
                    {
                    searchNotes.map((data, index) => (
                        <tr key={index} className="btm mb-3 bg-[#309689] w-[100%] md:w-[96%] h-[6vh] md:h-[9vh] rounded-xl flex items-center cursor-pointer">
                            <td className='w-[10%] text-center text-lg'>{index + 1}</td>
                            <td className='w-[50%] text-lg'>{data.title}</td>
                            <td className='w-[50%] text-lg'>{data.description.slice(0,20) } ...</td>
                            <td className='w-[40%] text-lg'>View</td>
                        </tr>
                    ))    
                    }
                    </div>

                    <div className="crime-response-right bg-[#EBF5F4] w-[100%] md:w-[30%] rounded-lg px-4 py-4 ">
                        <h1 className='font-semibold text-3xl my-2'>Add Complaint</h1>
                        {
                            localStorage.getItem("token") ? "" : <p className='text-red-500 text-center'>
                                Please sign in to register your complaint
                            </p>
                        }
                        <div className="inputs">

                            <div className="inp my-4">
                                <input value={ title } onChange={ (e) => setTitle(e.target.value) } className='w-[100%] px-4 py-1 rounded-lg outline-none' type="text" placeholder='Complaint Title' />
                            </div>

                            <div className="inp my-4">
                                <p className='text-sm mt-3 pl-2'>Report image</p>
                                <input name="image" onChange={ (e) => setImage(e.target.files[0]) } type="file" className='w-[100%] py-1 px-2 rounded-lg outline-none' />
                            </div>

                            <div className="inp my-4">
                                <textarea value={ desc } onChange={ (e) => setDesc(e.target.value) } rows={ 8 } className='w-[100%] px-4 py-1 rounded-lg outline-none' type="text" placeholder='Complaint Description' />
                            </div>

                            <div className="btn text-center my-4">
                                <button onClick={ addPostHandle } disabled={ !localStorage.getItem("token") } className='bg-[#03302D] disabled:bg-[#666] py-2 w-[100%] text-white rounded-lg'>Add Report</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default CrimeResponse;
