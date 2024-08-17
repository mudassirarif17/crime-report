import React, { useEffect, useState, useContext } from 'react';
import myContext from '../context/data/myContext';

import Layout from "../Pages/Layout";
import bookmark from "../assets/bookmark.png";
import cardLogo from "../assets/crime-card-icon.png";
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';


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
  const {allNotes, getAllPosts , getAllUsers , allUser , getAllUserComments , userscomment , north , east , west , south , central} = context;

  useEffect(() => {
    getAllPosts();
    getAllUsers();
    getAllUserComments();
}, [allNotes]);


  const pieData = {
    labels: ['North', 'East', 'South', 'West' , 'Central'],
    datasets: [
      {
        label: 'All Users',
        data: [north.length, east.length , south.length , west.length , central.length],
        backgroundColor: [
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 19, 192)',
          'rgb(75, 192, 50)',
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
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Crime Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
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

  const CrimeCard = () => (
    <div className="card w-[85vw] mx-auto bg-white shadow-xl rounded-2xl py-4 mb-10">
      <div className="card-top w-[96%] mx-auto flex justify-between items-center">
        <button className='bg-[#d6f5f1] font-light rounded-lg text-[#309689] px-2 py-1'>Updated</button>
        <img src={bookmark} alt="Bookmark" />
      </div>
      <div className="card-mid w-[96%] my-5 mx-auto flex items-center space-x-4">
        <div className="logo">
          <img src={cardLogo} alt="Card logo" />
        </div>
        <div className="desc">
          <h1 className='font-semibold text-2xl'>Crime Reports Of 2023</h1>
          <p className='font-light text-md'>Karachi East, West, South, North</p>
        </div>
      </div>
      <div className="card-bottom w-[96%] flex justify-end my-5 mx-auto">
        <button className='bg-[#309689] text-white px-3 py-1 font-semibold rounded-lg'>See More</button>
      </div >
    </div>
  );


  return (
    <Layout>
      <div className="crime-reports">
        <div className="hero bg-[#03302D] h-[35vh] text-white flex justify-center items-center">
          <h1 className='text-5xl font-semibold'>Crime Reports</h1>
        </div>

        <div className="crime-cards w-[90vw] mx-auto my-5">
          <CrimeCard />
          <CrimeCard />
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
            <div class="grid cols-1 md:grid-cols-4 gap-4 my-4" >
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
