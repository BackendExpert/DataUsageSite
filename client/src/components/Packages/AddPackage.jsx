import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const AddPackage = () => {
    const navigate = useNavigate()

    const [PackageData, SetPackageData] = useState({
        packageName: '',
        packageDesc: '',
        dataPackage: '',
        freeData: '',
        standedData: '',
        packagePrice: '',
        packageFor: ''
    })

    const headleCreatePackage = async (e) => {
        e.preventDefault();

        // console.log(import.meta.env.VITE_APP_API)

        const res = await axios.post(import.meta.env.VITE_APP_API + '/package/CreatePackage', PackageData)
        .then(res => {
            if(res.data.Status === "Success"){
                alert("Package Created Successfully")
                window.location.reload()
            }
            else{
                alert(res.data.Error)
            }
        })



    }
  return (
    <div>
        <h1 className="text-xl font-semibold text-gray-500">Create New Package</h1>

        <div className="mt-4 bg-white rounded shadow-md p-4">
            <div className="">
                <form onSubmit={headleCreatePackage} method="post">
                    <div className="md:grid grid-cols-2 gap-4">
                        <div className="">
                            <input type="text" name="" id="" className="w-full h-10 bg-gray-200 rounded pl-2 md:my-0 my-2" required placeholder='Package Name'
                            onChange={e => SetPackageData({...PackageData, packageName:e.target.value})}/>
                        </div>
                        <div className="">
                            <input type="number" name="" id="" className="w-full h-10 bg-gray-200 rounded pl-2 md:my-0 my-2" required placeholder='Package Data'
                            onChange={e => SetPackageData({...PackageData, dataPackage:e.target.value})}/>
                        </div>
                    </div>
                    <div className="md:my-4 my-2">
                        <textarea name="" id="" className='p-2 h-24 bg-gray-200 rounded w-full' placeholder='Package Descriptaion' onChange={e => SetPackageData({...PackageData, packageDesc:e.target.value})}></textarea>
                    </div>
                    <div className="md:grid grid-cols-2 gap-4">
                        <div className="">
                            <input type="number" name="" id="" className="w-full h-10 bg-gray-200 rounded pl-2 md:my-0 my-2" required placeholder='Free Data (00:00-8:00)'
                            onChange={e => SetPackageData({...PackageData, freeData:e.target.value})}/>
                        </div>
                        <div className="">
                            <input type="number" name="" id="" className="w-full h-10 bg-gray-200 rounded pl-2 md:my-0 my-2" required placeholder='Standed Data (8:00 - 23:59)'
                            onChange={e => SetPackageData({...PackageData, standedData:e.target.value})}/>
                        </div>
                    </div>
                    <div className="md:grid grid-cols-2 gap-4 my-4">
                        <div className="">
                            <input type="number" name="" id="" className="w-full h-10 bg-gray-200 rounded pl-2 md:my-0 my-2" required placeholder='Package Price'
                            onChange={e => SetPackageData({...PackageData, packagePrice:e.target.value})}/>
                        </div>
                        <div className="">
                            <select name="" id="" className='w-full h-10 bg-gray-200 rounded pl-2 md:my-0 my-2' required>
                                <option value="">Select Package Type</option>
                                <option value="Internet">Select Package Type</option>
                                <option value="Internet Unlimited">Select Package Type</option>
                                <option value="Social Media Unlimited">Select Package Type</option> 
                                <option value="Social Media Unlimited">Select Package Type</option> 
                                <option value="Social Media Unlimited">Select Package Type</option> 
                                <option value="Social Media Unlimited">Select Package Type</option>                                                                
                            </select>
                        </div>
                    </div>

                    <div className="my-4">
                        <input type="submit" value="Create Package" className="bg-blue-500 py-2 px-4 rounded text-white cursor-pointer" />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddPackage