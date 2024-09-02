import React, { useState } from 'react'

const ManagePackages = () => {
    const data = [
        {name: "web Starter", packageUse: '5693', Status: "Active"},
        {name: "web Starter", packageUse: '5693', Status: "Active"},
        {name: "web Starter", packageUse: '5693', Status: "Active"},
        {name: "web Starter", packageUse: '5693', Status: "Active"},
        {name: "web Starter", packageUse: '5693', Status: "Active"},
        {name: "web Starter", packageUse: '5693', Status: "Active"},
        {name: "web Starter", packageUse: '5693', Status: "Active"},
        {name: "web Starter", packageUse: '5693', Status: "Active"},
    ]

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    
        if (value.length >= 3) {
          setFilteredData(
            data.filter((item) =>
              item.name.startsWith(value)
            )
          );
        } else {
          setFilteredData(data);
        }
    };

  return (
    <div>
        <h1 className="text-xl font-semibold text-gray-500">Manage Packages</h1>

        <div className="my-4 ">
            <input
                type="text"
                placeholder="Search by account number"
                value={searchTerm}
                onChange={handleSearch}
                className="mb-4 p-2 border border-gray-300 rounded-md w-full"
            />
            <table className='bg-white rounded-t-md  border-tools-table-outline border-black border-1 w-full'>
                <thead className='h-12 border-b text-left bg-gray-100'>
                    <tr className='text-gray-500'>
                        <th className='md:table-cell hidden pl-4 font-semibold rounded-tl-sm'>Package Name</th>
                        <th className='md:table-cell hidden pl-4'>Package Use</th>
                        <th className='md:table-cell hidden pl-4'>Status</th>
                        <th className='table-cell md:hidden pl-4'>Package Info</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.map((item, index) => {
                            return (
                                <tr className='h-10 text-sm border-b border-gray-200' key={index}>
                                    <td className='md:table-cell hidden pl-4 font-semibold rounded-tl-sm'>{item.name}</td>
                                    <td className='md:table-cell hidden pl-4'>{item.packageUse}</td>
                                    <td className='md:table-cell hidden pl-4 font-bold text-green-500'>{item.Status}</td>
                                    <td className='table-cell md:hidden pl-4'>
                                        <div className="my-2">
                                            <p className="">Email : 123@123.com</p>
                                            <p className="">Account : 0812377305</p>
                                            <p className="">Status : <span className="text-green-500 font-bold">Active</span></p>
                                            <p className="">Status : <span className="text-blue-500 font-bold">User</span></p>
                                        </div>
                                    </td>
                                    <td>
                                        <a href={'PackageView/' + item.name } className='text-blue-500 underline font-bold'>
                                            View
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ManagePackages