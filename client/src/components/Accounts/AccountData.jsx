import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsXCircleFill } from 'react-icons/bs'
import { useParams } from 'react-router-dom'

const AccountData = () => {
    const {id} = useParams()
    const [AccData, SetAccData] = useState([])

    useEffect(() => {
        const res = axios.get(import.meta.env.VITE_APP_API + `/userAcc/ViewOneAccount/${id}`)
        .then(res => SetAccData(res.data.Result))
        .catch(err => console.log(err))
    }, [])

    const [btnValue, SetbtnValue] = useState(0)

    const headleClick = (value) => {
        SetbtnValue(value)
    }

    const [PackageData, SetPackageData] = useState([])

    useEffect(() => {
        const res = axios.get(import.meta.env.VITE_APP_API + '/package/AllPackages')
        .then(res => SetPackageData(res.data.Result))
        .catch(err => console.log(err))
    }, [])
    

    const [UpdateData, SetUpdateData] = useState({
        AccountNumber: '',
        Package: '',
    })

    const headleUpdateAcc = (e) => {
        e.preventDefault();


    }

  return (
    <div>
        <h1 className="text-xl font-semibold text-gray-500">AccountData : {id} </h1>

        <div className="mt-4 bg-white rounded p-4 shadow-md">
            <table className='w-full'>
                <tr className='h-10 border-b border-gray-200'>
                    <td className=''>
                        <p className="text-gray-500 font-bold">Email Address : </p>
                    </td>
                    <td className=''>
                        <p className="text-gray-500">{AccData.email}</p>
                    </td>
                </tr>
                <tr className='h-10 border-b border-gray-200'>
                    <td className=''>
                        <p className="text-gray-500 font-bold">Account Number : </p>
                    </td>
                    <td className=''>
                        <p className="text-gray-500">{AccData.AccNo}</p>
                    </td>
                </tr>
                <tr className='h-10 border-b border-gray-200'>
                    <td className=''>
                        <p className="text-gray-500 font-bold">Account Status : </p>
                    </td>
                    <td className=''>
                        {
                            (() => {
                                if(AccData.Status === "Active"){
                                    return(
                                        <p className="text-green-500 font-bold">Active</p>
                                    )
                                }
                                else if(AccData.Status === "Pending"){
                                    return(
                                        <p className="text-yellow-500 font-bold">Pending</p>
                                    )
                                }
                                else{
                                    return(
                                        <p className="text-red-500 font-bold">Deactive</p>
                                    )
                                }
                            })()
                        }
                    </td>
                </tr>
                <tr className='h-10 border-b border-gray-200'>
                    <td className=''>
                        <p className="text-gray-500 font-bold">Account Packages : </p>
                    </td>
                    <td className=''>
                        <p className="text-gray-500">{AccData.CurrentPackage}</p>
                    </td>
                </tr>
            </table>

            <div className="mt-2">
                {
                    (() => {
                        if(btnValue !== "Update") {
                            return (
                                <div className="">
                                    <button className="bg-blue-500 text-white rounded py-2 px-4" onClick={() => headleClick("Update")}>Update</button>
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
        </div>

        {
            (() => {
                if(btnValue === "Update"){
                    return (
                        <div className="mt-4 bg-white rounded shadow-md p-4">
                            <div className="flex justify-between">
                                <div className="">
                                    <h1 className="text-gray-500"><span className='font-bold'>Update Account</span> : {AccData.email}</h1>
                                </div>
                                <div className="">
                                    <BsXCircleFill className='h-6 w-full text-red-500 cursor-pointer' onClick={() => headleClick('Close')}/>
                                </div>
                            </div>
                            <hr className='mt-2'/>

                            <div className="my-2">
                                <form action="" onSubmit={headleUpdateAcc} method='POST'>
                                    <div className="md:flex">
                                        <div className="w-full mr-1">
                                            <input type="text" name="" id="" className="h-10 bg-gray-200 rounded w-full" placeholder='Enter Account Number'
                                            onChange={e => SetAccData({...AccData, AccountNumber:e.target.value})}/>
                                        </div>
                                        <div className="w-full ml-1">
                                            <select name="" id="" className='h-10 bg-gray-200 rounded w-full' required onChange={e => SetAccData({...AccData, package:e.target.value})}>
                                                <option value="">Select Package</option>
                                                {
                                                    PackageData.map((data, index) => {
                                                        return (
                                                            <option value={data.PackageName} key={index}>{data.PackageName}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <input type="submit" value="Update Account" className='bg-blue-500 text-white py-2 px-4 rounded mt-4'/>

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

export default AccountData