import React, { useState } from 'react'
import logo from "../assets/logo.png";
import upper from "../assets/uperimage.png";
import back from "../assets/backimage.png";
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginHandle = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`crime-report-three.vercel.app/api/auth/login`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const loginData = await res.json();
      console.log(loginData);

      if (!res.ok) { // Check for HTTP errors
        toast.error(loginData.msg || "Invalid Credential", {
          position: "top-right",
          autoClose: 1000,  // Duration in milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success("Logged In", {
          position: "top-right",
          autoClose: 5000,  // Duration in milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        localStorage.setItem('token', loginData.token);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }

    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Something went wrong. Please try again later.", {
        position: "top-right",
        autoClose: 1000,  // Duration in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setEmail("");
    setPassword("");


  }

  return (
    <div>
      <ToastContainer />
      <div className="signup flex">

        <div className="signup-left hidden md:block w-[60vw] h-[100vh]">
          <div className="back-side relative">
            <img className='h-[100vh]' src={ back } alt="back-side" />
            <img className='absolute top-0 h-[100vh] right-16' src={ upper } alt="upper" />
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
                <input value={ email } onChange={ (e) => setEmail(e.target.value) } placeholder='Email' type="email" className='w-[95%] md:w-[73%] py-1 px-2 rounded-md border-2 border-[#309689] outline-none' />
              </div>
              <div className='my-5 ml-3'>
                <p className='text-sm mb-3'>Password</p>
                <input value={ password } onChange={ (e) => setPassword(e.target.value) } placeholder='Password' type="password" className='w-[95%] md:w-[73%] py-1 px-2 rounded-md border-2 border-[#309689] outline-none' />
              </div>
              <div className='my-8 ml-3'>
                <button onClick={ loginHandle } className='bg-[#309689] text-white w-[95%] md:w-[73%] py-2 rounded-lg text-lg font-semibold'>Login</button>
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
