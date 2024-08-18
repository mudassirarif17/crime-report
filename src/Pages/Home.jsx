import React, { useContext, useEffect } from 'react'
import Layout from "../Pages/Layout";
import bookmark from "../assets/bookmark.png";
import cardLogo from "../assets/crime-card-icon.png";
import quotes from "../assets/Quotes.png";
import newhero from "../assets/newhero.png";
import arrow from "../assets/arrow-right.png";
import laptopPeople from "../assets/laptop-people.png";
import myContext from '../context/data/myContext';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';




const Home = () => {
  const context = useContext(myContext);
  const { allNotes, getAllPosts, gangrape, murder, targetkilling, murderrobbery, bombblast, highway, carsnatch, bank, latestPost, crimeSouth, southCrime } = context;

  useEffect(() => {
    getAllPosts();
    crimeSouth();
  }, [allNotes]);

  const CrimeCard = () => (
    <div className="card w-[85vw] mx-auto bg-white shadow-xl rounded-2xl py-4 mb-10">
      <div className="card-top w-[96%] mx-auto flex justify-between items-center">
        <button className='bg-[#d6f5f1] font-light rounded-lg text-[#309689] px-2 py-1'>Updated</button>
        <img src={ bookmark } alt="Bookmark" />
      </div>
      <div className="card-mid w-[96%] my-5 mx-auto flex items-center space-x-4">
        <div className="logo">
          <img src={ cardLogo } alt="Card logo" />
        </div>
        <div className="desc">
          <h1 className='font-semibold text-2xl'>Crime Reports Of 2023</h1>
          <p className='font-light text-md'>Karachi East, West, South, North</p>
        </div>
      </div>
      <div className="card-bottom w-[96%] flex justify-end my-5 mx-auto">
        <Link to="/crime-23" className='bg-[#309689] text-white px-3 py-1 font-semibold rounded-lg'>See All</Link>
      </div>
    </div>
  );


  return (
    <Layout>
      <div className="contact">
        <div className="hero hero-title h-[88vh] text-white flex justify-center items-center">
          <h1 className="text-5xl font-semibold">Home</h1>
        </div>


        <div className="after-hero w-[92vw] md:w-[85vw] mx-auto px-4 mt-20">
          <h1 className='font-bold text-xl md:text-5xl'>Recent Crimes Happened</h1>
          <div className="desc flex justify-between my-3">
            <p className="font-light text-sm w-[80%]">Stay informed and vigilant with our comprehensive datab</p>
            <a className='text-[#309689] text-sm md:text-xl font-semibold' href="">View all</a>
          </div>
        </div>

        <div className="crime-cards w-[90vw] mx-auto">
          <div className="card w-[85vw] mx-auto bg-white shadow-xl rounded-2xl py-4 mb-10">
            <div className="card-top w-[96%] mx-auto flex justify-between items-center">
              <button className='bg-[#d6f5f1] font-light rounded-lg text-[#309689] px-2 py-1'>Updated</button>
              <img src={ bookmark } alt="Bookmark" />
            </div>
            <div className="card-mid w-[96%] my-5 mx-auto flex items-center space-x-4">
              <div className="logo">
                <img src={ cardLogo } alt="Card logo" />
              </div>
              <div className="desc">
                <h1 className='font-semibold text-2xl'>Crime Reports Of South</h1>
                <p className='font-light text-md'>2023 , 2022 , 2021 , 2020 , 2019</p>
              </div>
            </div>
            <div className="card-bottom w-[96%] flex justify-end my-5 mx-auto">
              <Link to="/south" className='bg-[#309689] text-white px-3 py-1 font-semibold rounded-lg'>See All</Link>
            </div>
          </div>
          {/* <CrimeCard /> */ }
          {/* <CrimeCard /> */ }
        </div>

        <div className="crime-cards w-[90vw] mx-auto">
          <div className="card w-[85vw] mx-auto bg-white shadow-xl rounded-2xl py-4 mb-10">
            <div className="card-top w-[96%] mx-auto flex justify-between items-center">
              <button className='bg-[#d6f5f1] font-light rounded-lg text-[#309689] px-2 py-1'>Updated</button>
              <img src={ bookmark } alt="Bookmark" />
            </div>
            <div className="card-mid w-[96%] my-5 mx-auto flex items-center space-x-4">
              <div className="logo">
                <img src={ cardLogo } alt="Card logo" />
              </div>
              <div className="desc">
                <h1 className='font-semibold text-2xl'>Crime Reports Of East</h1>
                <p className='font-light text-md'>2023 , 2022 , 2021 , 2020 , 2019</p>
              </div>
            </div>
            <div className="card-bottom w-[96%] flex justify-end my-5 mx-auto">
              <Link to="/east" className='bg-[#309689] text-white px-3 py-1 font-semibold rounded-lg'>See All</Link>
            </div>
          </div>
        </div>

        <div className="crime-cards w-[90vw] mx-auto">
          <div className="card w-[85vw] mx-auto bg-white shadow-xl rounded-2xl py-4 mb-10">
            <div className="card-top w-[96%] mx-auto flex justify-between items-center">
              <button className='bg-[#d6f5f1] font-light rounded-lg text-[#309689] px-2 py-1'>Updated</button>
              <img src={ bookmark } alt="Bookmark" />
            </div>
            <div className="card-mid w-[96%] my-5 mx-auto flex items-center space-x-4">
              <div className="logo">
                <img src={ cardLogo } alt="Card logo" />
              </div>
              <div className="desc">
                <h1 className='font-semibold text-2xl'>Crime Reports Of West</h1>
                <p className='font-light text-md'>2023 , 2022 , 2021 , 2020 , 2019</p>
              </div>
            </div>
            <div className="card-bottom w-[96%] flex justify-end my-5 mx-auto">
              <Link to="/west" className='bg-[#309689] text-white px-3 py-1 font-semibold rounded-lg'>See All</Link>
            </div>
          </div>
          {/* <CrimeCard /> */ }
          {/* <CrimeCard /> */ }
        </div>

        <div className="crime-cards w-[90vw] mx-auto">
          <div className="card w-[85vw] mx-auto bg-white shadow-xl rounded-2xl py-4 mb-10">
            <div className="card-top w-[96%] mx-auto flex justify-between items-center">
              <button className='bg-[#d6f5f1] font-light rounded-lg text-[#309689] px-2 py-1'>Updated</button>
              <img src={ bookmark } alt="Bookmark" />
            </div>
            <div className="card-mid w-[96%] my-5 mx-auto flex items-center space-x-4">
              <div className="logo">
                <img src={ cardLogo } alt="Card logo" />
              </div>
              <div className="desc">
                <h1 className='font-semibold text-2xl'>Crime Reports Of Central</h1>
                <p className='font-light text-md'>2023 , 2022 , 2021 , 2020 , 2019</p>
              </div>
            </div>
            <div className="card-bottom w-[96%] flex justify-end my-5 mx-auto">
              <Link to="/central" className='bg-[#309689] text-white px-3 py-1 font-semibold rounded-lg'>See All</Link>
            </div>
          </div>
          {/* <CrimeCard /> */ }
          {/* <CrimeCard /> */ }
        </div>

        <div className="crime-category bg-[#dffaf6]">
          <h1 className='text-center font-bold text-4xl py-5'>Browse by Crime Category</h1>
          <p className='text-center font-light'>Explore Crime Types and Patterns</p>
          <div class="grid w-[85%] mx-auto cols-1 md:grid-cols-4 gap-4 py-10">

            <div className="card cursor-pointer my-0 md:my-4 h-[15vh] md:h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center bg-white">
              <h1 className='text-xl font-bold text-center'>MURDER</h1>
              <p className='text-center my-4 bg-[#bcf3ec] text-sm px-4 text-[#309689] font-bold rounded-md py-1'>{ murder.length }</p>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 h-[15vh] md:h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center bg-white">
              <h1 className='text-xl font-bold text-center'>TARGETED KILLING</h1>
              <p className='text-center my-4 bg-[#bcf3ec] text-sm px-4 text-[#309689] font-bold rounded-md py-1'>{ targetkilling.length }</p>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 h-[15vh] md:h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center bg-white">
              <h1 className='text-xl font-bold text-center'>MURDER DURING ROBBERY</h1>
              <p className='text-center my-4 bg-[#bcf3ec] text-sm px-4 text-[#309689] font-bold rounded-md py-1'>{ murderrobbery.length }</p>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 h-[15vh] md:h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center bg-white">
              <h1 className='text-xl font-bold text-center'>BOMB BLAST</h1>
              <p className='text-center my-4 bg-[#bcf3ec] text-sm px-4 text-[#309689] font-bold rounded-md py-1'>{ bombblast.length }</p>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 h-[15vh] md:h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center bg-white">
              <h1 className='text-xl font-bold text-center'>HIGH WAY ROBBERY</h1>
              <p className='text-center my-4 bg-[#bcf3ec] text-sm px-4 text-[#309689] font-bold rounded-md py-1'>{ highway.length }</p>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 h-[15vh] md:h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center bg-white">
              <h1 className='text-xl font-bold text-center'>BANK ROBBERY</h1>
              <p className='text-center my-4 bg-[#bcf3ec] text-sm px-4 text-[#309689] font-bold rounded-md py-1'>{ bank.length }</p>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 h-[15vh] md:h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center bg-white">
              <h1 className='text-xl font-bold text-center'>CAR SNATCHING</h1>
              <p className='text-center my-4 bg-[#bcf3ec] text-sm px-4 text-[#309689] font-bold rounded-md py-1'>{ carsnatch.length }</p>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 h-[15vh] md:h-[30vh] rounded-lg shadow-md flex flex-col items-center justify-center bg-white">
              <h1 className='text-xl font-bold text-center'>GANG RAPE</h1>
              <p className='text-center my-4 bg-[#bcf3ec] text-sm px-4 text-[#309689] font-bold rounded-md py-1'>{ gangrape.length }</p>
            </div>

          </div>
        </div>

        <div className="community flex md:w-[65vw] mx-auto flex-col md:flex-row md:justify-between items-center my-5">
          <div className="comm-left flex  justify-between gap-2 w-[90%] md:w-[45%] h-[50vh]">
            <img src={ laptopPeople } alt="" />
          </div>

          <div className="comm-right w-[93%] md:w-[50%] ">
            <div className="top px-4">
              <h1 className='font-bold text-lg md:text-4xl my-2'>Enhancing Community</h1>
              <h1 className='font-bold text-lg md:text-4xl text-[#309689] my-2'>Safety Together</h1>
              <p className='font-light text-sm'>In our shared mission to enhance community safety, collaboration is key. By working together, residents, law enforcement, and local organizations can create a proactive approach to crime prevention. Our platform encourages open communication and reporting, empowering everyone to contribute to a safer environment. With access to real-time data and resources, community members can stay informed about potential risks. Together, we can build a resilient community that prioritizes safety and well-being. Join us in fostering a culture of vigilance and support, where everyone plays a role in keeping our neighborhoods secure.</p>
            </div>

            <div className="btm px-4 my-4">
              <div className="btm-top flex flex-col md:flex-row">

              </div>
              <div className="btm-btm my-2  flex flex-col md:flex-row">

              </div>
            </div>

          </div>

        </div>

        <div className="response-people bg-[#dffaf6] mt-10">
          <h1 className='text-center font-bold text-3xl py-5'>Response From People On Complaints</h1>
          <p className='text-center font-light'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id ...</p>
          <div class="grid w-[85%] mx-auto cols-1 md:grid-cols-3 gap-4 py-10">

            <div className="card cursor-pointer my-0 md:my-4 rounded-lg shadow-md bg-white py-7">
              <div className="desc px-5 py-5">
                <h1 className='text-xl font-bold'>Robbery Incident Reported</h1>
                <p className='font-light text-sm'>I witnessed the incident and immediately contacted the authorities. We need to work together to increase neighborhood watch programs to prevent further occurrences.</p>
              </div>
              <div className="icons px-5 flex justify-end">
                <img src={ quotes } alt="" />
              </div>
              <div className="anonymous px-5 flex items-center gap-2 text-md font-semibold">
                <div className='bg-gray-300 w-[50px] h-[50px] rounded-full'></div>
                <p>Anonymous</p>
              </div>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 rounded-lg shadow-md bg-white py-7">
              <div className="desc px-5 py-5">
                <h1 className='text-xl font-bold'>Snatching Incident on Main Street</h1>
                <p className='font-light text-sm'>This is alarming! We should organize a community meeting to discuss safety measures and possibly install more street lights in the area.</p>
              </div>
              <div className="icons px-5 flex justify-end">
                <img src={ quotes } alt="" />
              </div>
              <div className="anonymous px-5 flex items-center gap-2 text-md font-semibold">
                <div className='bg-gray-300 w-[50px] h-[50px] rounded-full'></div>
                <p>Anonymous</p>
              </div>
            </div>

            <div className="card cursor-pointer my-0 md:my-4 rounded-lg shadow-md bg-white py-7">
              <div className="desc px-5 py-5">
                <h1 className='text-xl font-bold'>Addressing Gang Rape</h1>
                <p className='font-light text-sm'>This is a devastating incident that requires urgent action. We must support the victims and advocate for stronger community support services and educational programs ...</p>
              </div>
              <div className="icons px-5 flex justify-end">
                <img src={ quotes } alt="" />
              </div>
              <div className="anonymous px-5 flex items-center gap-2 text-md font-semibold">
                <div className='bg-gray-300 w-[50px] h-[50px] rounded-full'></div>
                <p>Anonymous</p>
              </div>
            </div>

          </div>
        </div>

        <div className='news-and-blog w-[90vw]  mx-auto my-10'>
          <div className="desc">
            <h1 className='text-xl md:text-3xl font-bold'>Recent Crimes</h1>
            <p className='py-3 text-sm md:text-md font-light'>Crime in Karachi: What’s Happening Now?</p>
          </div>
          <div className="btm my-4 flex flex-col md:flex-row justify-between">
            {
              latestPost.map((data, index) => (
                <div className="btm-left w-[100%] md:w-[48%] cursor-pointer">
                  <img className='w-[40%] h-[40%]' src={ `src/images/${data.image}` } alt="" />
                  <div className="desc py-2 px-2">
                    <p className="date text-sm font-light">{ formatDistanceToNow(new Date(data.date), { addSuffix: true }) }</p>
                    <h1 className='font-bold text-lg md:text-2xl'>{ data.title }</h1>
                    <p>{ data.description } ...</p>
                    <div className='flex gap-2 items-center my-2'>
                      <Link to='/crime-response' className='text-[#309689] text-sm md:text-md font-semibold'>Read More</Link>
                      <img src={ arrow } alt="" />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Home
