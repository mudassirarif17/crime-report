import React from 'react'
import Layout from "../Pages/Layout";

const Crime23 = () => {
  return (
    <Layout>
        <div className='w-[90vw] mx-auto my-10'>
  <div className="overflow-x-auto shadow-lg rounded-lg">
    <table className="min-w-full bg-white">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
            Name
          </th>
          <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
            Age
          </th>
          <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
            Location
          </th>
          <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-50">
          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
            John Doe
          </td>
          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
            28
          </td>
          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
            New York
          </td>
          <td className="py-3 px-4 border-b border-gray-200 text-sm text-blue-500 cursor-pointer hover:text-blue-700">
            Edit
          </td>
        </tr>
        <tr className="bg-gray-50 hover:bg-gray-100">
          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
            Jane Smith
          </td>
          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
            32
          </td>
          <td className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700">
            Los Angeles
          </td>
          <td className="py-3 px-4 border-b border-gray-200 text-sm text-blue-500 cursor-pointer hover:text-blue-700">
            Edit
          </td>
        </tr>
        {/* Additional rows here */}
      </tbody>
    </table>
  </div>
</div>

    </Layout>
  )
}

export default Crime23
