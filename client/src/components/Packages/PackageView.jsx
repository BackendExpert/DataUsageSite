import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BsXCircleFill } from 'react-icons/bs'

const PackageView = () => {
    const {id} = useParams()
    const [packageOneData, SetPackageOneData] = useState([])

    useEffect(() => {
      const res = axios.get(import.meta.env.VITE_APP_API + `/package/ViewOnPackge/${id}`)
      .then(res => SetPackageOneData(res.data.Result))
      .catch(err => console.log(err))
    }, [])


    const [btnValue, SetbtnValue] = useState(0)

    const headleClick = (value) => {
      SetbtnValue(value)
    }

    const [UpdatePackage, SetUpdatePackage] = useState({
      packageDesc: '',
      packageData: '',
      packageFreeData: '',
      packageStandedData: '',
      packagePrice: ''
    })

    const headlePackageUpdate = async (e) => {
      e.preventDefault()

      try{
        // console.log(UpdatePackage)

        const updatedData = {};
        for (let key in UpdatePackage) {
          if (UpdatePackage[key]) {
            updatedData[key] = UpdatePackage[key];
          }
        }

        // console.log(updatedData)

        const res = await axios.post(import.meta.env.VITE_APP_API + `/package/UpdatePackage/${id}`,  updatedData)
        .then(res => {
          if(res.data.Status === "Success"){
            alert("Package Updated Successful")
            window.location.reload()
          }
          else{
            alert(res.data.Error)
          }
        })


      }
      catch(err) {
        console.log(err)
      }
    }

        
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
                if(packageOneData.pkFor === "Youtube Unlimited"){
                  return (
                    <td className='text-gray-500 border-l border-gray-200 pl-4'><span className='text-red-500 font-semibold'>{packageOneData.pkData} GB / Week</span></td>
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
                if(packageOneData.pkFor === "Internet Unlimited" || packageOneData.pkFor === "Social Media Unlimited" || packageOneData.pkFor === "Learning"){
                  return (
                    <>
                      <td className='w-1/4 text-gray-500 border-l border-gray-200 pl-4'><span>Free Data : </span> Unlimited GB</td>
                      <td className='w-1/4 text-gray-500 border-l border-gray-200 pl-4'><span>Standed Data : </span> Unlimited GB</td>
                    </>
                  )
                }
                else if(packageOneData.pkFor === "Youtube Unlimited"){
                  return (
                    <>
                      <td className='w-1/4 text-gray-500 border-l border-gray-200 pl-4'>1 Week or ({packageOneData.pkData} GB) Youtube</td>
                    </>
                  )
                }
                else if(packageOneData.pkFor === "Gamming"){
                  return (
                    <>
                      <td className='w-1/4 text-gray-500 border-l border-gray-200 pl-4'>{packageOneData.pkData} GB for Gamming</td>
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
          <tr className='h-10 border-b border-gray-200'>
            <td className='w-1/4 font-semibold'>Package Price</td>
            <td className='text-gray-500 border-l border-gray-200 pl-4'>{packageOneData.pkPrice} /-</td>
          </tr>
          <tr className='h-10 border-b border-gray-200'>
            <td className='w-1/4 font-semibold'>Package For</td>
            <td className='text-gray-500 border-l border-gray-200 pl-4'>{packageOneData.pkFor} </td>
          </tr>
        </table>
        {
          (() => {
            if(btnValue !== "Update"){
              return (
                <div className="mt-4">
                  <button className='bg-blue-500 text-white rounded py-2 px-4' onClick={() => headleClick('Update')}>Update</button>
                </div>
              )
            }
            else{
              return (
                <div className=""></div>
              )
            }
          })()
        }

      </div>

      {
        (() => {
          if(btnValue === "Update"){
            return (
              <div className="mt-2 bg-white rounded shadow-md p-4">
                <div className="flex justify-between">
                  <div className="">
                    <h1><span className='font-semibold'>Update Package:</span> {packageOneData.PackageName}</h1>
                  </div>
                  <div className="">
                    <BsXCircleFill className='text-red-500 h-6 w-full cursor-pointer' onClick={() => headleClick('UpdateClose')}/>
                  </div>
                </div>

                <div className="mt-4">
                  <form action="" onSubmit={headlePackageUpdate}>

                  <table className='w-full mt-4'>
                    <tr className='h-10 border-b border-gray-200'>
                      <td className='w-1/4 font-semibold'>Package Description</td>
                      <td className='text-gray-500 border-l border-gray-200 pl-4'>
                        <input type="text" name="" id="" className="w-full h-10 my-1 rounded bg-gray-200 pl-2" placeholder='Package Description'
                        onChange={e => SetUpdatePackage({...UpdatePackage, packageDesc:e.target.value})}/>
                      </td>
                    </tr>

                    <tr className='h-10 border-b border-gray-200'>
                      <td className='w-1/4 font-semibold'>Package Data</td>
                      <td className='text-gray-500 border-l border-gray-200 pl-4'>
                        <input type="number" name="" id="" className="w-full h-10 my-1 rounded bg-gray-200 pl-2" placeholder='Package Data'
                        onChange={e => SetUpdatePackage({...UpdatePackage, packageData:e.target.value})}/>
                      </td>
                    </tr>

                    {
                      (() => {
                        if(packageOneData.pkFor === "Internet Unlimited" || packageOneData.pkFor === "Youtube Unlimited" || packageOneData.pkFor === "Learning" || packageOneData.pkFor === "Social Media Unlimited" || packageOneData.pkFor === "Gamming"){
                          return (
                            <div className=""></div>
                          )
                        }
                        else{
                          return (
                            <tr className='h-10 border-b border-gray-200'>
                              <td className='w-1/4 font-semibold'>Package Data Structure</td>
                              <td className='text-gray-500 border-l border-gray-200 pl-4'>
                                <div className="flex justify-between">
                                  <input type="number" name="" id="" className="mr-1 w-full h-10 my-1 rounded bg-gray-200 pl-2" placeholder='Package Free Data'
                                  onChange={e => SetUpdatePackage({...UpdatePackage, packageFreeData:e.target.value})}/>
                                  <input type="number" name="" id="" className="ml-1 w-full h-10 my-1 rounded bg-gray-200 pl-2" placeholder='Package Standed Data'
                                  onChange={e => SetUpdatePackage({...UpdatePackage, packageStandedData:e.target.value})}/>
                                </div>
                              </td>
                            </tr>
                          )
                        }
                      })()
                    }

                    <tr className='h-10 border-b border-gray-200'>
                      <td className='w-1/4 font-semibold'>Package Price</td>
                      <td className='text-gray-500 border-l border-gray-200 pl-4'>
                        <input type="number" name="" id="" className="w-full h-10 my-1 rounded bg-gray-200 pl-2" placeholder='Package Data' 
                        onChange={e => SetUpdatePackage({...UpdatePackage, packagePrice:e.target.value})}/>
                      </td>
                    </tr>
                  </table>


                  <input type="submit" value="Update Package" className='bg-blue-500 text-white rounded py-2 px-4 mt-2'/>

                  </form>
                </div>
              </div>
            )
          }
          else{
            return (
              <div className=""></div>
            )
          }
        })()
      }
    </div>
  )
}

export default PackageView