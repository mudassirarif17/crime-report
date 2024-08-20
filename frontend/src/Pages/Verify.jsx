import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import logo from "../assets/logo.png";
import upper from "../assets/uperimage.png";
import back from "../assets/backimage.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Verify = () => {
    const [email, setEmail] = useState('');
    const [otp , setOtp] = useState('');

    const navigate = useNavigate();

    const VerifyHandle = async (e) => {
        const formdata = new FormData();
        formdata.append('email' , email);
        formdata.append('otp' , otp);
        try {
          e.preventDefault();
          const res = await axios.post(`http://localhost:5000/api/auth//verify-otp` , formdata , {
            headers : {"Content-Type" : "application/json"}
          });
          console.log(res)
          if(res.status == 200){
            toast.success("OTP successfully verified", {
              position: "top-right",
              autoClose: 1000,  // Duration in milliseconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setEmail('');
            setOtp();
            setTimeout(()=>{
              navigate('/sign-in');
            },1000)
          }else{
            toast.error("Some Error", {
              position: "top-right",
              autoClose: 1000,  // Duration in milliseconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        } catch (error) {
          console.log("Error" , error);
        }
      }


  return (
    <div>
            <ToastContainer />
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
                        <h1 className='font-semibold text-xl md:text-4xl ml-3'>Verify Your Account</h1>
                        <div className="inputs mt-6">
                            <div className='my-3 ml-3'>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="email" className='w-[95%] md:w-[73%] py-1 px-2 rounded-md border-2 border-[#309689] outline-none' />
                                <p className='text-sm mt-3'>Email</p>
                            </div>
                            <div className='my-3 ml-3'>
                                <input onChange={(e) => setOtp(e.target.value)} value={otp} placeholder='OTP' type="password" className='w-[95%] md:w-[73%] py-1 px-2 rounded-md border-2 border-[#309689] outline-none' />
                                <p className='text-sm mt-3'>OTP</p>
                            </div>
                            <div className='my-3 ml-3'>
                                <button onClick={VerifyHandle} className='bg-[#309689] text-white w-[95%] md:w-[73%] py-2 rounded-lg text-lg font-semibold'>Verify</button>
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

export default Verify
