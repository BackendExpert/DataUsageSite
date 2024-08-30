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

        </div>
    </div>
  )
}

export default AddPackage