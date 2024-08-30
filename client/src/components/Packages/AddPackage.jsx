import React, { useState } from 'react'

const AddPackage = () => {
    const [PackageData, SetPackageData] = useState({
        packageName: '',
        packageDesc: '',
        packageData: '',
        freeData: '',
        standedData: '',
        packagePrice: '',
        packageFor: ''
    })

    const headleCreatePackage = (e) => {
        e.preventDefault();


    }
  return (
    <div>
        <h1 className="text-xl font-semibold text-gray-500">Create New Package</h1>

        <div className="mt-4 bg-white rounded shadow-md p-4">
            <div className="">
                <form onSubmit={headleCreatePackage} method="post">
                    <div className="md:grid grid-cols-2 gap-2">
                        <div className="">
                            <input type="text" name="" id="" className="w-full h-10 bg-gray-200 rounded pl-2 md:my-0 my-2" required placeholder='Package Name'
                            onChange={e => SetPackageData({...PackageData, packageName:e.target.value})}/>
                        </div>
                        <div className="">
                            <input type="number" name="" id="" className="w-full h-10 bg-gray-200 rounded pl-2 md:my-0 my-2" required placeholder='Package Data'
                            onChange={e => SetPackageData({...PackageData, packageName:e.target.value})}/>
                        </div>
                    </div>
                    <div className="my-4">
                        <textarea name="" id="" className='p-2 h-24 bg-gray-200 rounded w-full' placeholder='Package Descriptaion'></textarea>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddPackage