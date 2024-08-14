import React, { useEffect, useState, useContext } from 'react';
import Layout from "../Pages/Layout";
import location from "../assets/location.png";
import myContext from '../context/data/myContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";





const CrimeResponse = () => {


    const context = useContext(myContext);
    const { title, setTitle, desc, setDesc, image, setImage, allNotes, setAllNotes, searchNotes, setSearchNotes, search, setSearch, addPostHandle, getAllPosts , likeHandler , disLikeHandler } = context;

    useEffect(() => {
        getAllPosts();
    }, []);

    const showCommentModal = () => {
        if (document.getElementById('modal').classList.contains('hidden')) {
            document.getElementById('modal').classList.remove('hidden')
        } else {
            document.getElementById('modal').classList.add('hidden')
        }
    }

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
                        <div class="grid cols-1 md:grid-cols-2 gap-4 py-10">
                        {
                            searchNotes.map((data, index) => (
                                // <tr key={ index } className="btm mb-3 bg-[#309689] w-[100%] md:w-[96%] h-[6vh] md:h-[9vh] rounded-xl flex items-center cursor-pointer">
                                //     <td className='w-[10%] text-center text-lg'>{ index + 1 }</td>
                                //     <td className='w-[50%] text-lg'>{ data.title }</td>
                                //     <td className='w-[50%] text-lg'>{ data.description.slice(0, 20) } ...</td>
                                //     <td onClick={showModal} className='w-[40%] text-lg'>View</td>
                                // </tr>
                                <div className="card w-[97%] cursor-pointer my-0 md:my-4 rounded-lg shadow-md bg-white py-7">
                                <div className="img flex justify-center">
                                    <img className='px-5 h-[200px]' src={`src/images/${data.image}`} alt="loading" />
                                </div>
                                <div className="desc px-5 py-5">
                                    <h1 className='text-xl font-bold'>{ data.title }</h1>
                                    <p className='font-light text-sm'>{ data.description} ...</p>
                                </div>
                                <div className="icons px-5 flex justify-end">
                                    <img src={ "" } alt="" />
                                </div>
                                <div className="anonymous px-5 flex items-center gap-2 text-md font-semibold">
                                    <div className='bg-gray-300 w-[50px] h-[50px] rounded-full'></div>
                                    <div>
                                        <p>Anonymous</p>
                                        <p className='text-sm font-light'>27-jun-24</p>
                                    </div>
                                </div>
                                <div className='px-5 pt-4 response flex justify-between items-center'>
                                    <div onClick={() =>likeHandler(data._id)} className='flex gap-1 items-center'>
                                        <div className='num'>{data.likes.length}</div>
                                        <div className="icon"><AiOutlineLike className='text-xl'/></div>
                                    </div>
                                    <div onClick={showCommentModal} className='flex gap-1 items-center'>
                                        <div className='num'>0</div>
                                        <div className="icon"><FaRegComment/></div>
                                    </div>
                                    <div onClick={() =>disLikeHandler(data._id)} className='flex gap-1 items-center'>
                                        <div className='num'>{data.dislikes.length}</div>
                                        <div className="icon"><AiOutlineDislike className='text-xl'/></div>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                        </div>
                    </div>

                    <div className="crime-response-right h-[100%] bg-[#EBF5F4] w-[100%] md:w-[30%] rounded-lg px-4 py-4 ">
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

            {/* Modal code */ }
            <div id="modal" className="mx-auto hidden py-2 modal rounded-xl bg-white shadow-xl w-[100vw] md:w-[50vw] fixed top-[24%] md:left-[25.3vw]">

                <div className='top px-5 py-5 flex justify-between'>
                    <div className="left">
                        <h1 className='font-bold text-xl'>Add Comment</h1>
                    </div>
                    <div onClick={showCommentModal} className="right cursor-pointer">
                        <IoIosClose className='text-4xl'/>
                    </div>
                </div>

                <div className="mid px-5">
                    <ul>
                        <li>comment 1</li>
                        <li>comment 1</li>
                        <li>comment 1</li>
                        <li>comment 1</li>
                    </ul>
                </div>

                <div className="btm px-5 py-5 flex items-center">
                    <div className='w-[100%]'>
                        <input className='px-3 py-3 bg-[#fcf7f7] rounded-lg w-[95%] outline-none' type="text" placeholder='Comment'/>
                    </div>
                    <div>
                        <button className='bg-[#309689] text-white text-xl px-6 py-2 font-semibold rounded-lg'>Post</button>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default CrimeResponse;
