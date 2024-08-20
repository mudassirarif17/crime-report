import React from 'react'
import Layout from "./Layout";
import {east} from "../cr-23"


const East = () => {
  return (
    <Layout>
        <div className='w-[90vw] mx-auto my-10'>
  <div className="overflow-x-auto shadow-lg rounded-lg">
    <table className="min-w-full bg-white">
    <thead className="bg-gray-100">
        <tr>
          <th className="py-3 text-center px-4 border-b border-gray-200  text-sm font-semibold text-gray-600">
          BANK ROBBERY
          </th>
          <th className="py-3 px-4 border-b border-gray-200 text-center text-sm font-semibold text-gray-600">
            CAR SNATCHING
          </th>
          <th className="py-3 px-4 border-b border-gray-200 text-center text-sm font-semibold text-gray-600">
            DISTRICT
          </th>
          <th className="py-3 px-4 border-b border-gray-200 text-center text-sm font-semibold text-gray-600">
            GANGRAPE
          </th>
          <th className="py-3 px-4 border-b border-gray-200 text-center text-sm font-semibold text-gray-600">
            HIGHYWAY ROBBERY
          </th>
          <th className="py-3 px-4 border-b border-gray-200 text-center text-sm font-semibold text-gray-600">
            MURDER
          </th>
          <th className="py-3 px-4 border-b border-gray-200 text-center text-sm font-semibold text-gray-600">
            MURDER DURING ROBBERY
          </th>
          <th className="py-3 px-4 border-b border-gray-200 text-center text-sm font-semibold text-gray-600">
            TARGET KILLING
          </th>
          <th className="py-3 px-4 border-b border-gray-200 text-center text-sm font-semibold text-gray-600">
            SUICIDE
          </th>
          <th className="py-3 px-4 border-b border-gray-200 text-center text-sm font-semibold text-gray-600">
            MONTH
          </th>
          <th className="py-3 px-4 border-b border-gray-200 text-center text-sm font-semibold text-gray-600">
            YEAR
          </th>
        </tr>
      </thead>
      <tbody>
        {
          east.map((data , index)=>(
            <tr className="hover:bg-gray-50">
          <td className="py-3 px-4 border-b text-center border-gray-200 text-sm text-gray-700">
            {data['BANK ROBBERY']}
          </td>
          <td className="py-3 px-4 border-b text-center border-gray-200 text-sm text-gray-700">
            {data['CAR SNATCHING']}
          </td>
          <td className="py-3 px-4 border-b text-center border-gray-200 text-sm text-gray-700">
            {data.District}
          </td>
          <td className="py-3 px-4 border-b text-center border-gray-200 text-sm text-gray-700 cursor-pointer">
          {data['GANG RAPE']}
          </td>
          <td className="py-3 px-4 border-b text-center border-gray-200 text-sm text-gray-700 cursor-pointer">
          {data['HIGH WAY DACOITY/ROBBERY']}
          </td>
          <td className="py-3 px-4 border-b text-center border-gray-200 text-sm text-gray-700 cursor-pointer">
          {data.MURDER}
          </td>
          <td className="py-3 px-4 border-b text-center border-gray-200 text-sm text-gray-700 cursor-pointer">
          {data['MURDER DURING ROBBERY']}
          </td>
          <td className="py-3 px-4 border-b text-center border-gray-200 text-sm text-gray-700 cursor-pointer">
          {data['MURDER IN FORM OF TARGETED KILLING']}
          </td>
          <td className="py-3 px-4 border-b text-center border-gray-200 text-sm text-gray-700 cursor-pointer">
          {data['SUCIDE BOMBING/ BOMB BLAST']}
          </td>
          <td className="py-3 px-4 border-b text-center border-gray-200 text-sm text-gray-700 cursor-pointer">
          {data.Month}
          </td>
          <td className="py-3 px-4 border-b text-center border-gray-200 text-sm text-gray-700 cursor-pointer">
          {data.Year}
          </td>
        </tr>
          ))
        }
      </tbody>
    </table>
  </div>
</div>

    </Layout>
  )
}

export default East
