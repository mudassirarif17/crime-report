import React from 'react';
import logo from "../assets/logo.png";
import upper from "../assets/uperimage.png";
import back from "../assets/backimage.png";

const Login = () => {
    return (
        <div>
            <div className="signup flex">

                <div className="signup-left hidden md:block w-[60vw] h-[100vh]">
                    <div className="back-side relative">
                        <img className='h-[100vh]' src={back} alt="back-side"/>
                        <img className='absolute top-0 h-[100vh] right-16' src={upper} alt="upper" />
                    </div>
                </div>

                <div className="signup-right w-[100vw] md:w-[40vw] h-[100vh] flex flex-col md:justify-evenly justify-center ">

                    <div className="right-top">
                        <div className="logo flex justify-center md:justify-end w-[100%] md:w-[90%] ">
                            <img src={ logo } alt="logo" />
                        </div>
                    </div>

                    <div className="right-mid mt-6  mx-6">
                        <h1 className='font-semibold text-xl md:text-4xl ml-3'>Log In Your Account</h1>
                        <div className="inputs mt-6">
                            <div className='my-5 ml-3'>
                                <p className='text-sm mb-3'>Email</p>
                                <input placeholder='Email' type="email" className='w-[95%] md:w-[73%] py-1 px-2 rounded-md border-2 border-[#309689] outline-none' />
                            </div>
                            <div className='my-5 ml-3'>
                                <p className='text-sm mb-3'>Password</p>
                                <input placeholder='Password' type="password" className='w-[95%] md:w-[73%] py-1 px-2 rounded-md border-2 border-[#309689] outline-none' />
                            </div>
                            <div className='my-8 ml-3'>
                                <button className='bg-[#309689] text-white w-[95%] md:w-[73%] py-2 rounded-lg text-lg font-semibold'>Register</button>
                            </div>
                        </div>
                    </div>

                    <div className="right-bottom">
                        <p className='text-[#309689] text-center'>Terms and Conditions | Privacy Policy | Security Policy</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
