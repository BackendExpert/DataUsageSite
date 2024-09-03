import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PackageView = () => {
    const {id} = useParams()
    const [packageOneData, SetPackageOneData] = useState([])

    useEffect(() => {
      const res = axios.get(import.meta.env.VITE_APP_API + `/package/ViewOnPackge/${id}`)
      .then(res => SetPackageOneData(res.data.Result))
      .catch(err => console.log(err))
    }, [])
    
  return (
    <div>
      <div className="bg-white rounded shadow-md p-4">
        <p className="text-gray-500">
          <span className='font-semibold'>Package Data</span> : {packageOneData.PackageName}
        </p>

        <table className='w-full mt-4'>
          <tr className='h-10 border-b border-gray-200'>
            <td className='w-1/4 font-semibold'>Package Name</td>
            <td className='text-gray-500 border-l border-gray-200 pl-4'>{packageOneData.PackageName}</td>
          </tr>
          <tr className='h-10 border-b border-gray-200'>
            <td className='w-1/4 font-semibold'>Package Description</td>
            <td className='text-gray-500 border-l border-gray-200 pl-4'>{packageOneData.pkDesc}</td>
          </tr>
          <tr className='h-10 border-b border-gray-200'>
            <td className='w-1/4 font-semibold'>Package Data</td>
            {
              (() => {
                if(packageOneData.pkFor === "Internet Unlimited"){
                  return (
                    <td className='text-gray-500 border-l border-gray-200 pl-4'><span className='text-red-500 font-semibold'>{packageOneData.pkData} GB / Day</span>, After {packageOneData.pkData} GB Speed 1 mbps</td>
                  )
                }
                else{
                  return (
                    <td className='text-gray-500 border-l border-gray-200 pl-4'>{packageOneData.pkData} GB / Month </td>
                  )
                }
              })()
            }
          </tr>
          <tr className='h-10 border-b border-gray-200'>
            <td className='w-1/4 font-semibold'>Package Data Structure</td>
            {
              (() => {
                if(packageOneData.pkFor === "Internet Unlimited"){
                  return (
                    <>
                      <td className='w-1/4 text-gray-500 border-l border-gray-200 pl-4'><span>Free Data : </span> Unlimited GB</td>
                      <td className='w-1/4 text-gray-500 border-l border-gray-200 pl-4'><span>Standed Data : </span> Unlimited GB</td>
                    </>

                  )
                }
                else{
                  return (
                    <>
                      <td className='w-1/4 text-gray-500 border-l border-gray-200 pl-4'><span>Free Data : </span>{packageOneData.pkFreeData} GB</td>
                      <td className='w-1/4 text-gray-500 border-l border-gray-200 pl-4'><span>Standed Data : </span>{packageOneData.pkStadndedData} GB</td>
                    </>
                  )
                }
              })()
            }
            
          </tr>
        </table>
      </div>
    </div>
  )
}

export default PackageView