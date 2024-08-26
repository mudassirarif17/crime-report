import React, { useEffect, useState, useContext } from 'react';
import myContext from '../context/data/myContext';

import Layout from "../Pages/Layout";
import bookmark from "../assets/bookmark.png";
import cardLogo from "../assets/crime-card-icon.png";
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import {west as w} from "../cr-23"
import {south as s} from "../cr-23"
import {east as e} from "../cr-23"
import {central as c} from "../cr-23"
import { Link } from 'react-router-dom';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const CrimeReports = () => {
  const context = useContext(myContext);
  const {allNotes, getAllPosts , getAllUsers , allUser , getAllUserComments , userscomment , malir , korangi , east , west , south , central} = context;

  useEffect(() => {
    getAllPosts();
    getAllUsers();
    getAllUserComments();
  }, []);

  const pieData = {
    labels: ['Malir', 'Korangi' , 'East', 'South', 'West' , 'Central'],
    datasets: [
      {
        label: 'All Users',
        data: [malir.length, korangi.length ,  east.length , south.length , west.length , central.length],
        backgroundColor: [
          'rgb(75, 192, 192)',
          'rgb(75, 20, 192)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(200, 200, 192)',
          'rgb(200, 0, 200)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'All Crimes',
      },
    },
  };

  const lineData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'South',
        data: [s.filter((data)=> data.Year === 2019).length, s.filter((data)=> data.Year === 2020).length, s.filter((data)=> data.Year === 2021).length, s.filter((data)=> data.Year === 2022).length, s.filter((data)=> data.Year === 2023).length],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'East',
        data: [e.filter((data)=> data.Year === 2019).length, e.filter((data)=> data.Year === 2020).length, e.filter((data)=> data.Year === 2021).length, e.filter((data)=> data.Year === 2022).length, e.filter((data)=> data.Year === 2023).length],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
      },
      {
        label: 'West',
        data: [w.filter((data)=> data.Year === 2019).length, w.filter((data)=> data.Year === 2020).length, w.filter((data)=> data.Year === 2021).length, w.filter((data)=> data.Year === 2022).length, w.filter((data)=> data.Year === 2023).length],
        fill: false,
        backgroundColor: 'rgb(192, 192, 192)',
        borderColor: 'rgb(192, 192, 192)',
      },
      {
        label: 'Central',
        data: [c.filter((data)=> data.Year === 2019).length, c.filter((data)=> data.Year === 2020).length, c.filter((data)=> data.Year === 2021).length, c.filter((data)=> data.Year === 2022).length, c.filter((data)=> data.Year === 2023).length],
        fill: false,
        backgroundColor: 'rgb(192, 52, 192)',
        borderColor: 'rgb(192, 52, 192)',
      }
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '5 Years Crime Dataset',
      },
    },
  };

  return (
    <Layout>
      <div className="crime-reports">
        <div className="hero bg-[#03302D] h-[35vh] text-white flex justify-center items-center">
          <h1 className='text-5xl font-semibold'>Crime Reports</h1>
        </div>

        <div className="crime-cards w-[90vw] mx-auto my-5">
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

        </div>

        <div className="crime-stats bg-[#EBF5F4] py-10">
          <div className="stats-top">
            <h1 className='text-center text-5xl font-bold mb-8'>Crime Statistics</h1>
            <p className='text-center text-md font-light'>Our portal delivers dynamic crime statistics, offering insights into registered complaints <br /> such as robberies, snatchings, bomb blasts, gang rapes, and more.</p>
          </div>

          <div className="stats-mid w-[90vw] mx-auto">
            <Line data={lineData} options={lineOptions} />
          </div>

          <div className="stats-bottom w-[90vw] mx-auto">
            <h1 className='text-center font-bold text-2xl'>Active Percentage</h1>
            <div className="grid cols-1 md:grid-cols-4 gap-4 my-4" >
              <div>
                <Pie data={pieData} options={pieOptions} />
              </div>
              <div>
                <div className='reporters h-[20vh] md:h-[50vh] flex justify-center flex-col items-center'>
                  <h1 className='text-3xl font-bold'>Reports</h1>
                  <h1 className='text-xl font-semibold'>{allNotes.length} reports</h1>
                </div>
              </div>
              <div>
                <div className='reporters h-[20vh] md:h-[50vh] flex justify-center flex-col items-center'>
                  <h1 className='text-3xl font-bold'>Responses</h1>
                  <h1 className='text-xl font-semibold'>{userscomment.length} responses</h1>
                </div>
              </div>
              <div>
                <div className='reporters h-[20vh] md:h-[50vh] flex justify-center flex-col items-center'>
                  <h1 className='text-3xl font-bold'>Users</h1>
                  <h1 className='text-xl font-semibold'>{allUser.length} users</h1>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CrimeReports;
